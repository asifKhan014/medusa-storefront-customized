"use client";

import { addToCart, retrieveCart } from "@lib/data/cart";
import { useIntersection } from "@lib/hooks/use-in-view";
import { HttpTypes } from "@medusajs/types";
import { Button } from "@medusajs/ui";
import Divider from "@modules/common/components/divider";
import OptionSelect from "@modules/products/components/product-actions/option-select";
import { isEqual } from "lodash";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import ProductPrice from "../product-price";
import MobileActions from "./mobile-actions";
import Link from "next/link";

type ProductActionsProps = {
  product: HttpTypes.StoreProduct;
  region: HttpTypes.StoreRegion;
  disabled?: boolean;
};

const optionsAsKeymap = (
  variantOptions: HttpTypes.StoreProductVariant["options"]
) => {
  return variantOptions?.reduce((acc: Record<string, string>, varopt: any) => {
    acc[varopt.option_id] = varopt.value;
    return acc;
  }, {});
};

export default function ProductActions({
  product,
  disabled,
}: ProductActionsProps) {
  const [options, setOptions] = useState<Record<string, string | undefined>>(
    {}
  );
  const [isAdding, setIsAdding] = useState(false);
  const countryCode = useParams().countryCode as string;
  const [quantity, setQuantity] = useState(1);

  // If there is only 1 variant, preselect the options
  useEffect(() => {
    if (product.variants?.length === 1) {
      const variantOptions = optionsAsKeymap(product.variants[0].options);
      setOptions(variantOptions ?? {});
    }
  }, [product.variants]);

  const selectedVariant = useMemo(() => {
    if (!product.variants || product.variants.length === 0) {
      return;
    }

    return product.variants.find((v) => {
      const variantOptions = optionsAsKeymap(v.options);
      return isEqual(variantOptions, options);
    });
  }, [product.variants, options]);

  // update the options when a variant is selected
  const setOptionValue = (optionId: string, value: string) => {
    setOptions((prev) => ({
      ...prev,
      [optionId]: value,
    }));
  };

  //check if the selected options produce a valid variant
  const isValidVariant = useMemo(() => {
    return product.variants?.some((v) => {
      const variantOptions = optionsAsKeymap(v.options);
      return isEqual(variantOptions, options);
    });
  }, [product.variants, options]);

  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    // If we don't manage inventory, we can always add to cart
    if (selectedVariant && !selectedVariant.manage_inventory) {
      return true;
    }

    // If we allow back orders on the variant, we can add to cart
    if (selectedVariant?.allow_backorder) {
      return true;
    }

    // If there is inventory available, we can add to cart
    if (
      selectedVariant?.manage_inventory &&
      (selectedVariant?.inventory_quantity || 0) > 0
    ) {
      return true;
    }

    // Otherwise, we can't add to cart
    return false;
  }, [selectedVariant]);

  const actionsRef = useRef<HTMLDivElement>(null);

  const inView = useIntersection(actionsRef, "0px");

  const fetchClientIp = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error("Failed to fetch client IP:", error);
      return undefined;
    }
  };

  // add the selected variant to the cart
  const handleAddToCart = async () => {
    if (!selectedVariant?.id) return null;

    setIsAdding(true);

    try {
      const cart = await retrieveCart();
      const clientIp = cart ? undefined : await fetchClientIp();

      await addToCart({
        variantId: selectedVariant.id,
        quantity: quantity,
        countryCode,
        client_ip: clientIp,
      });
    } catch (error) {
      console.error("Failed to add to cart:", error);
    } finally {
      setIsAdding(false);
    }
  };

  const decrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const increase = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  return (
    <>
      <div className="flex flex-col  md:flex-row gap-4 " ref={actionsRef}>
        <div className="w-full md:place-self-start font-bold text-black border-[3px] border-brand-light-gray rounded-lg p-5">
          <Link
            //  href={`/brands/${type.toLowerCase().replace(/\s+/g, '-')}`
            href={`/categories/${product.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="font-rajdhani uppercase pb-2"
          >
            Type
          </Link>
          <h1 className="font-jet-brains-mono text-xl md:text-2xl text-black pb-8">
            {product.title}
          </h1>

          <div>
            {(product.variants?.length ?? 0) > 1 && (
              <div className="font-jet-brains-mono  flex flex-col gap-y-4">
                {(product.options || []).map((option) => {
                  return (
                    <div key={option.id}>
                      <OptionSelect
                        option={option}
                        current={options[option.id]}
                        updateOption={setOptionValue}
                        title={option.title ?? ""}
                        data-testid="product-options"
                        disabled={!!disabled || isAdding}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {/* <p className="font-jet-brains-mono text-sm mt-5">
            SKU: <span>012</span> | Product Code: <span>01</span>
          </p> */}
        </div>

        <div className="sticky top-6 place-self-start  w-full font-jet-brains-mono font-bold border-[3px] border-brand-light-gray  rounded-lg px-3 py-5">
          <ProductPrice product={product} variant={selectedVariant} />
          <div className="flex items-center gap-4 md:gap-9 my-5">
            <div className="w-32 md:w-40 h-10 md:h-14 grid grid-cols-3 text-xl md:text-2xl border-[3px] border-brand-light-gray rounded-md divide-x">
              <button onClick={decrease}>-</button>
              <span className="flex items-center justify-center">
                {quantity}
              </span>
              <button onClick={increase}>+</button>
            </div>
              { !inStock || !isValidVariant ? null : (
            <div className="flex items-center gap-2 md:gap-3">
              <div className="size-4 rounded-full bg-[#2BFF00]"></div>
                <p className="text-sm md:text-base uppercase">in-stock</p>
            </div>
              )}
          </div>
          <Button
            onClick={handleAddToCart}
            disabled={
              !inStock ||
              !selectedVariant ||
              !!disabled ||
              isAdding ||
              !isValidVariant
            }
            variant="primary"
            className="block w-full text-white font-jet-brains-mono text-center text-xl md:text-2xl bg-[#FF0000] hover:bg-black transition-colors ease-linear rounded-md py-3 px-6"
            isLoading={isAdding}
            data-testid="add-product-button"
          >
            {!selectedVariant && !options
              ? "Select variant"
              : !inStock || !isValidVariant
              ? "Out of stock"
              : "Add to Cart"}
          </Button>
          <MobileActions
            product={product}
            variant={selectedVariant}
            options={options}
            updateOptions={setOptionValue}
            inStock={inStock}
            handleAddToCart={handleAddToCart}
            isAdding={isAdding}
            show={!inView}
            optionsDisabled={!!disabled || isAdding}
          />
        </div>
      </div>
    </>
  );
}
