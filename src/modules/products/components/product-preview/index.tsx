import { Text } from "@medusajs/ui";
import { listProducts } from "@lib/data/products";
import { getProductPrice } from "@lib/util/get-product-price";
import { HttpTypes } from "@medusajs/types";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import Thumbnail from "../thumbnail";
import PreviewPrice from "./price";
import Image from "next/image";

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct;
  isFeatured?: boolean;
  region: HttpTypes.StoreRegion;
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: product.variants?.[0].id,
  });
  return (
    <LocalizedClientLink
      href={`/products/${product.handle}`}
    >

      <div className="group relative font-jet-brains-mono font-bold text-lg md:text-xl lg:text-2xl">
        <div className="relative border-[3px] border-brand-light-gray group-hover:border-black group-focus:border-brand-red duration-200 ease-linear rounded-lg overflow-hidden">
          <div className="max-h-60 xl:max-h-80 h-80 overflow-hidden">

            <div className="size-full relative">
              <Image
                className="object-cover w-full h-full"
                src={product?.images?.[0]?.url || ""}
                alt={`${product.title}`}
                layout="fill"
              />
            </div>

          </div>
          <div className="border-t-[3px] border-brand-light-gray group-hover:border-black group-focus:border-brand-red duration-200 ease-linear py-3.5 px-5">
            <div className="flex items-center justify-between font-rajdhani text-sm lg:text-base text-black uppercase gap-4 mb-3">
              <div>Type</div>
              <div>
                <span>
                  {product.variants?.map((variant) => variant.sku).join(", ")}
                </span>
              </div>
            </div>
            <h3 className="line-clamp-2"> {product.title}</h3>
            {/* <div className="uppercase text-base my-4">
              colour: RED | reticle: RECTICLE
            </div> */}
            <div className="mb-4">
              {cheapestPrice &&
                <PreviewPrice price={cheapestPrice} /> || '0.0'}
            </div>
            <div className="w-full h-14 bg-transparent"></div>
          </div>
        </div>
        <button
          className="absolute z-20 left-5 right-5 bottom-3.5 block h-14 text-white text-center bg-brand-red  hover:bg-black duration-200 ease-linear rounded-md py-3 px-6"
        >
          Add to Cart
        </button>
      </div>
    </LocalizedClientLink>
  );
}
