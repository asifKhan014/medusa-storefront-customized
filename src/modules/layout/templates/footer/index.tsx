// import { listCategories } from "@lib/data/categories"
// import { listCollections } from "@lib/data/collections"
// import { Text, clx } from "@medusajs/ui"

// import LocalizedClientLink from "@modules/common/components/localized-client-LocalizedClientLink"
// import MedusaCTA from "@modules/layout/components/medusa-cta"

// export default async function Footer() {
//   const { collections } = await listCollections({
//     fields: "*products",
//   })
//   const productCategories = await listCategories()

//   return (
//     <footer className="border-t border-ui-border-base w-full">
//       <div className="content-container flex flex-col w-full">
//         <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
//           <div>
//             <LocalizedClientLink
//               href="/"
//               className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
//             >
//               Medusa Store
//             </LocalizedClientLink>
//           </div>
//           <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
//             {productCategories && productCategories?.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base">
//                   Categories
//                 </span>
//                 <ul
//                   className="grid grid-cols-1 gap-2"
//                   data-testid="footer-categories"
//                 >
//                   {productCategories?.slice(0, 6).map((c) => {
//                     if (c.parent_category) {
//                       return
//                     }

//                     const children =
//                       c.category_children?.map((child) => ({
//                         name: child.name,
//                         handle: child.handle,
//                         id: child.id,
//                       })) || null

//                     return (
//                       <li
//                         className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
//                         key={c.id}
//                       >
//                         <LocalizedClientLink
//                           className={clx(
//                             "hover:text-ui-fg-base",
//                             children && "txt-small-plus"
//                           )}
//                           href={`/categories/${c.handle}`}
//                           data-testid="category-LocalizedClientLink"
//                         >
//                           {c.name}
//                         </LocalizedClientLink>
//                         {children && (
//                           <ul className="grid grid-cols-1 ml-3 gap-2">
//                             {children &&
//                               children.map((child) => (
//                                 <li key={child.id}>
//                                   <LocalizedClientLink
//                                     className="hover:text-ui-fg-base"
//                                     href={`/categories/${child.handle}`}
//                                     data-testid="category-LocalizedClientLink"
//                                   >
//                                     {child.name}
//                                   </LocalizedClientLink>
//                                 </li>
//                               ))}
//                           </ul>
//                         )}
//                       </li>
//                     )
//                   })}
//                 </ul>
//               </div>
//             )}
//             {collections && collections.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base">
//                   Collections
//                 </span>
//                 <ul
//                   className={clx(
//                     "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
//                     {
//                       "grid-cols-2": (collections?.length || 0) > 3,
//                     }
//                   )}
//                 >
//                   {collections?.slice(0, 6).map((c) => (
//                     <li key={c.id}>
//                       <LocalizedClientLink
//                         className="hover:text-ui-fg-base"
//                         href={`/collections/${c.handle}`}
//                       >
//                         {c.title}
//                       </LocalizedClientLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             <div className="flex flex-col gap-y-2">
//               <span className="txt-small-plus txt-ui-fg-base">Medusa</span>
//               <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
//                 <li>
//                   <a
//                     href="https://github.com/medusajs"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     GitHub
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://docs.medusajs.com"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     Documentation
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://github.com/medusajs/nextjs-starter-medusa"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     Source code
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
//           <Text className="txt-compact-small">
//             © {new Date().getFullYear()} Medusa Store. All rights reserved.
//           </Text>
//           <MedusaCTA />
//         </div>
//       </div>
//     </footer>
//   )
// }

// "use client"
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import target from "../../../../../public/target.svg";
import Image from "next/image";
import { listCategories } from "@lib/data/categories";
import { listCollections } from "@lib/data/collections";
import { Text, clx } from "@medusajs/ui";

const Footer = async () => {
  const { collections } = await listCollections({
    fields: "*products",
  });
  const productCategories = await listCategories();
  const currentYear = new Date().getFullYear();

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   })
  // }

  return (
    <footer className="mt-auto border-t-[3px] border-brand-light-gray">
      <div className="content-container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-11 font-medium gap-6 px-4 xl:px-9 pt-9 pb-11">
        <div className="col-span-2">
          {productCategories && productCategories?.length > 0 && (
            <>
              <h4 className="font-chakra-petch font-bold text-brand-black uppercase mb-4">
                Categories
              </h4>
              <div className="grid grid-cols-2 font-jet-brains-mono gap-4">
                <div className="space-y-2">
                  <ul
                    // className="grid grid-cols-1 gap-2"
                    className={clx(
                      "grid grid-cols-1 gap-2 ",
                      // {
                      //   "grid-cols-2 gap-20": (productCategories?.length || 0) > 4,
                      // }
                    )}
                    data-testid="footer-categories"
                  >
                    {productCategories?.slice(0, 6).map((c) => {
                      if (c.parent_category) {
                        return;
                      }

                      const children =
                        c.category_children?.map((child) => ({
                          name: child.name,
                          handle: child.handle,
                          id: child.id,
                        })) || null;

                      return (
                        <li className="flex flex-col gap-2  " key={c.id}>
                          <LocalizedClientLink
                            // className={clx(
                            //   "hover:text-ui-fg-base",
                            //   children && "txt-small-plus"
                            // )}

                            href={`/categories/${c.handle}`}
                            data-testid="category-LocalizedClientLink"
                          >
                            {c.name.charAt(0).toUpperCase() + c.name.slice(1)}
                          </LocalizedClientLink>
                          {children && (
                            <ul className="grid grid-cols-1 ml-3 gap-2">
                              {children &&
                                children.map((child) => (
                                  <li key={child.id}>
                                    <LocalizedClientLink
                                      // className="hover:text-ui-fg-base"
                                      href={`/categories/${child.handle}`}
                                      data-testid="category-LocalizedClientLink"
                                    >
                                      {child.name}
                                    </LocalizedClientLink>
                                  </li>
                                ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
        {collections && collections.length > 0 && (
          <div className="col-span-2">
            <h4 className="font-chakra-petch font-bold text-brand-black uppercase mb-4">
              Collections
            </h4>
            <div className="font-jet-brains-mono space-y-2">
              <ul
                className={clx(
                  "grid grid-cols-1 gap-2 "
                  // {
                  //   "grid-cols-2": (collections?.length || 0) > 3,
                  // }
                )}
              >
                {collections?.slice(0, 6).map((c) => (
                  <li key={c.id}>
                    <LocalizedClientLink
                      className="hover:text-ui-fg-base"
                      href={`/collections/${c.handle}`}
                    >
                      {c.title}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className="col-span-2">
          <h4 className="font-chakra-petch font-bold text-brand-black uppercase mb-4">
            About
          </h4>
          <p className="font-jet-brains-mono">
            Your one-stop shop for everything firearms and outdoors. Striving to
            provide an unbeatable customer experience since 1989!
          </p>
        </div>
        <div className="col-span-2">
          <h4 className="font-chakra-petch font-bold text-brand-black uppercase mb-4">
            Contact
          </h4>
          <div className="font-jet-brains-mono">
            <p>
              Bay 4, 510 - 77th Avenue SE
              <br />
              Calgary, Alberta T2H 1C3
              <br />
              Canada
            </p>
            <LocalizedClientLink href="tel:+18446974668" className="block mt-4">
              +1 (844) MY-SHOOT
            </LocalizedClientLink>
          </div>
        </div>
        <div className="col-span-2 md:col-span-4 xl:col-span-3">
          <h4 className="font-chakra-petch font-bold text-brand-black uppercase mb-4">
            Newsletter
          </h4>
          <form action="#" className="group mb-4">
            <div className="flex items-center">
              <input
                type="email"
                className="w-full h-14 font-jet-brains-mono border-[3px] border-r-0 border-brand-light-gray group-hover:border-brand-black transition-colors ease-linear rounded-l placeholder:font-jet-brains-mono placeholder:text-brand-black focus:outline-none pl-5"
                placeholder="E-mail Address"
              />
              <button
                type="submit"
                className="w-32 h-14 font-chakra-petch font-bold shrink-0 uppercase border-[3px] border-brand-gray group-hover:border-brand-black transition-colors ease-linear rounded-r bg-brand-light-gray"
              >
                sign up
              </button>
            </div>
          </form>
          <h4 className="font-chakra-petch font-bold text-brand-black uppercase mb-4">
            Social
          </h4>
          <div className="flex items-center gap-2.5">
            <LocalizedClientLink
              href="/"
              className="group w-11 h-11 flex items-center justify-center rounded-full shrink-0 bg-[#F5F5F5]"
            >
              <svg
                className="group-hover:scale-110 transition-all ease-linear"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2005_1266)">
                  <path
                    d="M19.8335 2.50002C19.0354 3.06292 18.1519 3.49344 17.2168 3.77502C16.7149 3.19794 16.0479 2.78893 15.306 2.60329C14.5641 2.41765 13.783 2.46435 13.0685 2.73706C12.354 3.00978 11.7405 3.49535 11.3109 4.12811C10.8814 4.76088 10.6565 5.5103 10.6668 6.27502V7.10835C9.20232 7.14632 7.75118 6.82153 6.44263 6.16289C5.13407 5.50425 4.00872 4.53221 3.16679 3.33335C3.16679 3.33335 -0.166544 10.8333 7.33345 14.1667C5.61723 15.3317 3.57275 15.9158 1.50012 15.8333C9.00012 20 18.1668 15.8333 18.1668 6.25002C18.166 6.0179 18.1437 5.78635 18.1001 5.55835C18.9506 4.7196 19.5508 3.66061 19.8335 2.50002Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2005_1266">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.666748)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/"
              className="group w-11 h-11 flex items-center justify-center rounded-full shrink-0 bg-[#F5F5F5]"
            >
              <svg
                className="group-hover:scale-110 transition-all ease-linear"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8334 1.66669H6.50004C4.19885 1.66669 2.33337 3.53217 2.33337 5.83335V14.1667C2.33337 16.4679 4.19885 18.3334 6.50004 18.3334H14.8334C17.1346 18.3334 19 16.4679 19 14.1667V5.83335C19 3.53217 17.1346 1.66669 14.8334 1.66669Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.0001 9.47501C14.103 10.1685 13.9845 10.8769 13.6616 11.4992C13.3387 12.1215 12.8277 12.6262 12.2015 12.9414C11.5752 13.2566 10.8655 13.3663 10.1733 13.255C9.48106 13.1436 8.84159 12.8167 8.34582 12.321C7.85005 11.8252 7.52323 11.1857 7.41185 10.4935C7.30046 9.8013 7.41018 9.09159 7.72539 8.46532C8.04061 7.83905 8.54528 7.32812 9.16761 7.00521C9.78994 6.68229 10.4983 6.56383 11.1918 6.66667C11.8992 6.77158 12.5542 7.10123 13.0599 7.60693C13.5656 8.11263 13.8952 8.76757 14.0001 9.47501Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.2501 5.41669H15.256"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/"
              className="group w-11 h-11 flex items-center justify-center rounded-full shrink-0 bg-[#F5F5F5]"
            >
              <svg
                className="group-hover:scale-110 transition-all ease-linear"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2005_1274)">
                  <path
                    d="M19.4501 5.34998C19.3511 4.95449 19.1495 4.59212 18.8657 4.29948C18.5818 4.00685 18.2257 3.7943 17.8334 3.68331C16.4001 3.33331 10.6668 3.33331 10.6668 3.33331C10.6668 3.33331 4.93344 3.33331 3.50011 3.71665C3.10782 3.82763 2.75176 4.04018 2.4679 4.33282C2.18404 4.62546 1.98243 4.98782 1.88344 5.38331C1.62112 6.83794 1.49281 8.31357 1.50011 9.79165C1.49076 11.2809 1.61908 12.7677 1.88344 14.2333C1.99258 14.6165 2.1987 14.9651 2.4819 15.2454C2.76509 15.5257 3.11579 15.7282 3.50011 15.8333C4.93344 16.2166 10.6668 16.2166 10.6668 16.2166C10.6668 16.2166 16.4001 16.2166 17.8334 15.8333C18.2257 15.7223 18.5818 15.5098 18.8657 15.2171C19.1495 14.9245 19.3511 14.5621 19.4501 14.1666C19.7104 12.723 19.8387 11.2586 19.8334 9.79165C19.8428 8.30244 19.7145 6.81556 19.4501 5.34998Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.79175 12.5167L13.5834 9.79165L8.79175 7.06665V12.5167Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2005_1274">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.666748)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </LocalizedClientLink>
          </div>
        </div>
      </div>
      <div className="border-t-[3px] border-brand-light-gray">
        <div className="relative content-container mx-auto flex flex-col xl:flex-row items-center justify-center xl:justify-between font-jet-brains-mono text-s text-center xl:text-left gap-7 px-4 xl:px-9 pb-3.5 pt-12 xl:py-2.5">
          <p>
            Copyright &copy; {currentYear} Shooting Sports Canada Ltd. All
            Rights Reserved.
          </p>
          <div className="order-first xl:order-last flex items-center gap-2.5">
            <LocalizedClientLink
              href="/privacy-policy"
              className="hover:text-brand-yellow focus:text-brand-gray transition-colors ease-linear"
            >
              Privacy Policy
            </LocalizedClientLink>
            <span>&#183;</span>
            <LocalizedClientLink
              href="/terms-and-conditions"
              className="hover:text-brand-yellow focus:text-brand-gray transition-colors ease-linear"
            >
              Terms and Conditions
            </LocalizedClientLink>
          </div>
          <button
            type="button"
            // onClick={scrollToTop}
            className="block absolute -top-6 left-1/2 -translate-x-1/2 size-12"
          >
            <Image src={target} alt="target" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
