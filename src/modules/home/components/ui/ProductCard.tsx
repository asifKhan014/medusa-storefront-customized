import Image from "next/image"
import Link from "next/link";
import { ProductType } from "../../../../lib/data/product";

const ProductCard = ({ image, type, code, name, handle, colour, reticle, price, oldPrice }: ProductType) => {

  return (
    <>
      <div className="group relative font-jet-brains-mono font-bold text-lg md:text-xl lg:text-2xl">
        <div
          className="relative border-[3px] border-gray-200 group-hover:border-black group-focus:border-brand-red transition-colors ease-linear rounded-lg overflow-hidden">
          <Link href={`/products/${handle}`}>
            <div className="max-h-60 xl:max-h-80 h-80 overflow-hidden">
              <div className="size-full relative">
                <Image className="object-contain w-full h-full" src={image} alt="binoculars" fill />
              </div>
            </div>
            <div
              className="border-t-[3px] border-gray-50 group-hover:border-black group-focus:border-brand-red  transition-colors ease-linear py-3.5 px-5">
              <div
                className="flex items-center justify-between font-rajdhani text-sm lg:text-base text-black uppercase gap-4 mb-3">
                <p>{type}</p>
                <p><span>{code}</span></p>
              </div>
              <h3 className="line-clamp-2">{name}</h3>
              <div className="uppercase text-base my-4">
                colour: {colour} | reticle: {reticle}
              </div>
              <p className="mb-4">
                {
                  <>
                    <span className={`${oldPrice && "text-[#ff0000]"}`}>
                      ${price}
                    </span>
                    {oldPrice && (
                      <span className="line-through ml-4">
                        ${oldPrice}
                      </span>
                    )}
                  </>
                }
              </p>
              <div className="w-full h-14 bg-transparent"></div>
            </div>
          </Link>
        </div>
        <Link href="/cart"
          className="absolute z-20 left-5 right-5 bottom-3.5 block h-14 text-white text-center bg-brand-red  hover:bg-black transition-colors ease-linear rounded-md py-3 px-6">Add
          to Cart</Link>
      </div>
    </>
  )
}

export default ProductCard
