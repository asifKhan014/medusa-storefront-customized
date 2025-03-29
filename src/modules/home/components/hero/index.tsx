// import { Github } from "@medusajs/icons"
// import { Button, Heading } from "@medusajs/ui"

// const Hero = () => {
//   return (
//     <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
//       <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
//         <span>
//           <Heading
//             level="h1"
//             className="text-3xl leading-10 text-ui-fg-base font-normal"
//           >
//             Ecommerce Starter Template
//           </Heading>
//           <Heading
//             level="h2"
//             className="text-3xl leading-10 text-ui-fg-subtle font-normal"
//           >
//             Powered by Medusa and Next.js
//           </Heading>
//         </span>
//         <a
//           href="https://github.com/medusajs/nextjs-starter-medusa"
//           target="_blank"
//         >
//           <Button variant="secondary">
//             View on GitHub
//             <Github />
//           </Button>
//         </a>
//       </div>
//     </div>
//   )
// }

// export default Hero

"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import banner1 from "../../../../../public/banner-001.png"
import banner2 from "../../../../../public/banner-002.png"
import banner3 from "../../../../../public/banner-003.png"

export default function Hero() {
  return (
    <>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="max-w-screen-2xlarge mx-auto"
      >
        <CarouselContent>
          <CarouselItem className="lg:basis-5/6 relative min-h-fit">
            <Image src={banner1} width={banner1.width} className="rounded-lg mx-auto" height={banner1.height} alt="banner" />
          </CarouselItem>
          <CarouselItem className="lg:basis-5/6 relative min-h-fit">
            <Image src={banner2} width={banner2.width} className="rounded-lg mx-auto" height={banner2.height} alt="banner" />
          </CarouselItem>
          <CarouselItem className="lg:basis-5/6 relative min-h-fit">
            <Image src={banner3} width={banner3.width} className="rounded-lg mx-auto" height={banner3.height} alt="banner" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
}
