import React, { Suspense } from "react";

import ImageGallery from "@modules/products/components/image-gallery";
import ProductActions from "@modules/products/components/product-actions";
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta";
import ProductTabs from "@modules/products/components/product-tabs";
import RelatedProducts from "@modules/products/components/related-products";
import ProductInfo from "@modules/products/templates/product-info";
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products";
import { notFound } from "next/navigation";
import ProductActionsWrapper from "./product-actions-wrapper";
import { HttpTypes } from "@medusajs/types";
import Link from "next/link";
import Breadcrumb from "@modules/home/components/ui/Breadcrumb";

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct;
  region: HttpTypes.StoreRegion;
  countryCode: string;
};

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound();
  }

  return (
    <>
    <Breadcrumb/>
      <div className="content-container mx-auto w-full mb-16 px-4 xl:px-9 font-jet-brains-mono      ">
        <div className="md:grid md:grid-cols-2 xl:grid-cols-4 gap-4 space-y-4 md:space-y-0">
          <ImageGallery images={product?.images || []} />

          <div className="w-full md:col-span-2">
            <Suspense
              fallback={
                <ProductActions
                  disabled={true}
                  product={product}
                  region={region}
                />
              }
            >
              <ProductActionsWrapper id={product.id} region={region} />
            </Suspense>
          </div>
        </div>
        <div>
          <div
            className="content-container my-16 small:my-32"
            data-testid="related-products-container"
          >
            <Suspense fallback={<SkeletonRelatedProducts />}>
              <RelatedProducts product={product} countryCode={countryCode} />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTemplate;
