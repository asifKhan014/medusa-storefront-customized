import { clx } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"

export default function ProductPrice({
  product,
  variant,
}: {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return <div className="block w-32 h-9 bg-gray-100 animate-pulse" />
  }

  return (
    <div className="flex gap-4 font-jet-brains-mono">
      <span
        className={clx("text-xl-semi ", {
          "": selectedPrice.price_type === "sale",
        })}
      >
        {/* {!variant && "From "} */}
        <span
          data-testid="product-price"
          className="font-jet-brains-mono font-bold text-2xl "
          data-value={selectedPrice.calculated_price_number}
        >
            <span
            className={clx({
              "text-red-500": selectedPrice.price_type === "sale",
            })}
            >
            {selectedPrice.calculated_price}
            </span>
        </span>
      </span>
      {selectedPrice.price_type === "sale" && (
        <>
          <p>
            {/* <span className="text-ui-fg-subtle">Original: </span> */}
            <span
              className="line-through text-xl-semi"
              data-testid="original-product-price"
              data-value={selectedPrice.original_price_number}
            >
              {selectedPrice.original_price}
            </span>
          </p>
          {/* <span className="text-ui-fg-interactive">
            -{selectedPrice.percentage_diff}%
          </span> */}
        </>
      )}
    </div>
  )
}
