"use client";

import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import { Text } from "@medusajs/ui";
import clsx from "clsx";
import { StoreProductCategory } from "@medusajs/types";

const Categories = ({
  product_categories,
}: {
  product_categories: StoreProductCategory[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryData, setCurrentCategoryData] =
    useState<StoreProductCategory>();
  return (
    <>
      <div
        onMouseLeave={() => setIsOpen(false)}
        className="relative bg-[#696969] font-chakra-petch  font-bold uppercase"
      >
        {product_categories && product_categories.length ? (
          <div className="h-10 w-full " onMouseEnter={() => setIsOpen(false)}>
            <div className="content-container overflow-x-auto no-scrollbar h-full flex justify-between items-center gap-x-6  ">
              <div className="h-full flex">
                {product_categories &&
                  product_categories.map((category) => {
                    if (category.parent_category) {
                      return;
                    }
                    const children =
                      category.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null;
                    return (
                      <div
                        key={category.id}
                        className={clsx(
                          " h-full items-center flex px-6 hover:bg-white text-white hover:text-black",
                          {
                            "bg-white text-black":
                              isOpen && category.id === categoryData?.id,
                          }
                        )}
                        onMouseEnter={() => {
                          if (children.length) {
                            setCurrentCategoryData(category);
                            setIsOpen(true);
                          } else {
                            setIsOpen(false);
                          }
                          if (category.id !== categoryData?.id) {
                            setCurrentCategoryData(category);
                          }
                        }}
                      >
                        <LocalizedClientLink
                          href={`/categories/${category?.handle}`}
                        >
                          <div className="flex space-x-1 h-full items-center">
                            <p
                              className={clsx(
                                "font-jet-brains-mono  font-semibold whitespace-nowrap",
                                {
                                  "text-black":
                                    isOpen && category.id === categoryData?.id,
                                }
                              )}
                            >
                              {category.name}
                            </p>
                            {children.length ? (
                              <HiChevronDown
                                className={clsx("", {
                                  "bg-white text-brand-red ":
                                    isOpen && category.id === categoryData?.id,
                                })}
                              />
                            ) : null}
                          </div>
                        </LocalizedClientLink>
                      </div>
                    );
                  })}
              </div>
              <div className="hidden lg:flex  h-full items-center justify-center font-jet-brains-mono">
                <LocalizedClientLink
                  href="/brands"
                  className="h-full px-6 flex items-center hover:bg-white text-white hover:text-black"
                >
                  Brands
                </LocalizedClientLink>
                <LocalizedClientLink
                  href="/clearance"
                  className="h-full px-6 flex items-center hover:bg-white text-white hover:text-black"
                >
                  Clearance
                </LocalizedClientLink>
              </div>
            </div>
          </div>
        ) : null}
        <div>
          {isOpen && (
            <>
              <div className="w-full bg-gray-100 absolute py-6 z-50">
                <div className="content-container">
                  <LocalizedClientLink
                    href={`/categories/${categoryData?.handle}`}
                  >
                    <Text className="text-2xl w-fit font-semibold py-4 hover:text-brand-red">
                      {categoryData?.name}
                    </Text>
                  </LocalizedClientLink>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-4 ">
                    {categoryData?.category_children.length
                      ? categoryData.category_children.map((child) => {
                          return (
                            <LocalizedClientLink
                              href={`/categories/${child?.handle}`}
                              key={child.id}
                              className="cool-link-white"
                            >
                              <p className="hover:text-brand-red w-fit font-bold">
                                {child.name}
                              </p>
                              <span className="text-sm">
                                {child.description}
                              </span>
                            </LocalizedClientLink>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>

              {/* Backdrop filter */}
              {/* <div className='absolute h-[100vh] duration-200 opacity-50 w-full bg-black z-50'
                  onMouseEnter={() => setIsOpen(false)}
                >
                </div> */}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Categories;
