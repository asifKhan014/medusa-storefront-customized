import { Text, clx } from "@medusajs/ui";
import { VariantPrice } from "types/global";

export default async function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) {
    return null;
  }

  return (
    <div className="flex items-center" data-testid="price-wrapper">
      <Text
        className={clx("text-2xl font-bold font-jet-brains-mono ", {
          "text-[#ff0000]": price.price_type === "sale",
        })}
        data-testid="price"
      >
        {price.calculated_price}
      </Text>
      {price.price_type === "sale" && (
        <Text
          className="line-through text-2xl font-bold font-jet-brains-mono ml-3"
          data-testid="original-price"
        >
          {price.original_price}
        </Text>
      )}
    </div>
  );
}
