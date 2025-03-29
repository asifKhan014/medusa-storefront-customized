import { notFound } from "next/navigation";
import { Suspense } from "react";

import InteractiveLink from "@modules/common/components/interactive-link";
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid";
import RefinementList from "@modules/store/components/refinement-list";
import { SortOptions } from "@modules/store/components/refinement-list/sort-products";
import PaginatedProducts from "@modules/store/templates/paginated-products";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import { HttpTypes } from "@medusajs/types";
import Breadcrumb from "@modules/home/components/ui/Breadcrumb";
import Filter from "@modules/home/components/ui/Filter";

export default function CategoryTemplate({
  category,
  sortBy,
  page,
  countryCode,
}: {
  category: HttpTypes.StoreProductCategory;
  sortBy?: SortOptions;
  page?: string;
  countryCode: string;
}) {
  const pageNumber = page ? parseInt(page) : 1;
  const sort = sortBy || "created_at";

  if (!category || !countryCode) notFound();

  const parents = [] as HttpTypes.StoreProductCategory[];

  const getParents = (category: HttpTypes.StoreProductCategory) => {
    if (category.parent_category) {
      parents.push(category.parent_category);
      getParents(category.parent_category);
    }
  };

  getParents(category);

  return (
    <>
      <Breadcrumb />
      <div className="content-container mx-auto w-full mb-16 px-4 xl:px-9">
        <div className="flex flex-row mb-4 text-2xl-semi gap-4">
          {parents &&
            parents.map((parent) => (
              <span key={parent.id} className="text-ui-fg-subtle">
                <LocalizedClientLink
                  className="mr-4 hover:text-black"
                  href={`/categories/${parent.handle}`}
                  data-testid="sort-by-link"
                >
                  {parent.name}
                </LocalizedClientLink>
                /
              </span>
            ))}
        <h1 className="font-rajdhani font-bold text-3xl uppercase mb-4">
            {category.name}
        </h1>
        </div>
        {category.description && (
          <p className="font-jet-brains-mono text-[15px] pb-5">
            {category.description}
          </p>
        )}
        {category.category_children && (
          <div className="mb-8 text-base-large">
            <ul className="grid grid-cols-1 gap-2">
              {category.category_children?.map((c) => (
                <li key={c.id}>
                  <InteractiveLink href={`/categories/${c.handle}`}>
                    {c.name}
                  </InteractiveLink>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="relative grid lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
          <div className="lg:sticky lg:top-4 self-start">
            {/* <RefinementList sortBy={sort} data-testid="sort-by-container" /> */}
            <Filter />
          </div>
          <div className="lg:col-span-2 xl:col-span-3">
            <Suspense
              fallback={
                <SkeletonProductGrid
                  numberOfProducts={category.products?.length ?? 8}
                />
              }
            >
              <PaginatedProducts
                sortBy={sort}
                page={pageNumber}
                categoryId={category.id}
                countryCode={countryCode}
              />
            </Suspense>
          </div>
        
        </div>
      </div>
    </>
  );
}
