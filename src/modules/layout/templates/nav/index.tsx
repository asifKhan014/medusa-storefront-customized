import { Suspense } from "react";

import { listRegions } from "@lib/data/regions";
import { StoreRegion } from "@medusajs/types";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import CartButton from "@modules/layout/components/cart-button";
import SideMenu from "@modules/layout/components/side-menu";
import Link from "next/link";
import Image from "next/image";
import target from "../../../../../public/target.svg";
import { Avatar, IconButton } from "@medusajs/ui";
import { HamIcon, Menu, Search, SearchIcon, UserCircleIcon } from "lucide-react";
import { listCategories } from "@lib/data/categories";
import Categories from "./categories-section";

export default async function Nav() {
  const product_categories = await listCategories();
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)


  return (
    <div className="mb-6">
      <header className="relative mx-auto  ">
        <nav className="font-chakra-petch  font-bold text-white">
          <div className="bg-black">
            <div className="max-w-screen-2xlarge md:pr-4 mx-auto flex items-center justify-between ">
              <LocalizedClientLink href="/">
                <div className="relative uppercase w-full min-w-44 max-w-52   bg-brand-red  text-right overflow-hidden py-2 px-4">
                  <span className="z-20 text-xl md:text-2xl ">
                    Shooting Sports
                  </span>
                  <div className="absolute top-11 size-14 md:size-[72px] z-10">
                    <Image src={target} fill alt="logo" />
                  </div>
                </div>
              </LocalizedClientLink>

              <div className="flex items-center gap-4 w-full max-w-[50%]">
                <form action="#" className="hidden lg:block w-full">
                  <input
                    className="font-jet-brains-mono w-full h-10 xl:h-12 bg-white rounded px-3 placeholder:text-black placeholder:font-normal text-black focus:outline-none"
                    type="search"
                    name=""
                    id=""
                    placeholder="Search..."
                  />
                </form>
              </div>

              <div className="flex items-center gap-4">
                <LocalizedClientLink
                  className="hover:underline"
                  href="/search"
                  data-testid="nav-account-link"
                >
                  <span className="block lg:hidden">
                    <SearchIcon size={24} />
                  </span>
                </LocalizedClientLink>

                <Suspense
                  fallback={
                    <LocalizedClientLink
                      className="hover:text-ui-fg-base flex gap-2 "
                      href="/cart"
                      data-testid="nav-cart-link"
                    >
                      Cart (0)
                    </LocalizedClientLink>
                  }
                >
                  <CartButton />
                </Suspense>
                <LocalizedClientLink
                  className="hover:underline"
                  href="/account"
                  data-testid="nav-account-link"
                >
                  <span className="hidden lg:block">Account</span>
                  <span className="block lg:hidden">
                    <UserCircleIcon className="mr-2" size={24} />
                  </span>
                </LocalizedClientLink>
                <LocalizedClientLink
                  className="hover:underline"
                  href="/account"
                >
                 <span className="block lg:hidden mr-2">
                 
                 <SideMenu regions={regions} />
                 </span>
                 </LocalizedClientLink>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="hidden md:block bg-black">
        <Categories product_categories={product_categories} />
      </div>
    </div>
  );
}
