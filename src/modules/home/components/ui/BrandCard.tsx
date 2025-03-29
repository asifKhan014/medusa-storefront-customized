import Image from 'next/image';
import Link from 'next/link'
import imagePlaceholder from '../../../../../public/target-gray.png'

type BrandCardTypes = {
  brand: string;
  handle: string;
  logo: string;
}

const BrandCard = ({ handle, logo, brand }: BrandCardTypes) => {
  return (
    <Link href={`brands${handle}`}
      className="group border-[3px] border-brand-light-gray hover:border-brand-black focus:border-brand-red transition-colors ease-linear rounded-lg overflow-hidden">
      <div className="flex items-center justify-center max-h-28 md:max-h-32 lg:max-h-36 xl:max-h-40 2xl:max-h-44 h-44 overflow-hidden relative">
        <Image className={`!relative group-hover:scale-105 transition-all ease-linear duration-300 object-contain p-4 ${logo ? '' : '!size-24'}`} src={logo ? logo : imagePlaceholder} fill alt='product' />
      </div>
      <p
        className="font-rajdhani font-bold md:text-xl lg:text-2xl text-brand-black border-t-[3px] border-brand-light-gray group-hover:border-brand-black group-focus:border-brand-red transition-colors ease-linear uppercase bg-[#F5F5F5] py-3.5 px-5">
        {brand}</p>
    </Link>
  )
}

export default BrandCard
