// import BrandCard from '@/components/BrandCard'
// import Breadcrumb from '@/components/Breadcrumb'
// import brands from "@/data/brands"

import Head from 'next/head'
import { Metadata } from 'next'
import Breadcrumb from '@modules/home/components/ui/Breadcrumb';
import brands from '../../../../lib/data/brands'
import BrandCard from '@modules/home/components/ui/BrandCard';
export const metadata: Metadata = {
  title: "Brands | Shooting Sports Canada",
};

const Brands = () => {
  return (
    <>
      <Head>
        <title>Home Page - Shooting Sports App</title>
        <meta name="description" content="This is the homepage of my Next.js app." />
      </Head>
      <Breadcrumb />

      <div className="max-w-base min-h-screen mx-auto w-full mb-16 px-4 xl:px-9">
        <h1 className="font-rajdhani font-bold text-3xl uppercase mb-4">Brands</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {brands.map((brand, idx) => (
            <BrandCard key={idx} handle={brand.handle} logo={brand.logo} brand={brand.brand} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Brands
