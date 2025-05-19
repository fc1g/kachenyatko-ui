type ProductPriceProps = {
  formattedPrice: string;
  formattedOldPrice: string | null;
};

export default function ProductPrice({
  formattedPrice,
  formattedOldPrice,
}: ProductPriceProps) {
  return (
    <div>
      {formattedOldPrice ? (
        <div className="flex items-center gap-2">
          <span className="text-custom-error text-3xl font-bold">
            {formattedPrice}
          </span>
          <span className="text-custom-gray line-through">
            {formattedOldPrice}
          </span>
        </div>
      ) : (
        <span className="text-custom-error text-3xl font-bold">
          {formattedPrice}
        </span>
      )}
    </div>
  );
}
