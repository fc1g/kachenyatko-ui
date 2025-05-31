type ProductPriceProps = {
  formattedPrice: string;
  formattedOldPrice: string | null;
  fontSize?: 'sm' | 'md';
};

export function ProductPrice({
  formattedPrice,
  formattedOldPrice,
  fontSize = 'md',
}: ProductPriceProps) {
  const fontSizeClass = fontSize === 'sm' ? 'text-2xl' : 'text-3xl';

  return (
    <div>
      {formattedOldPrice ? (
        <div className="flex items-center gap-2">
          <span className={`text-custom-error ${fontSizeClass} font-bold`}>
            {formattedPrice}
          </span>
          <span className="text-custom-gray line-through">
            {formattedOldPrice}
          </span>
        </div>
      ) : (
        <span className={`text-custom-error ${fontSizeClass} font-bold`}>
          {formattedPrice}
        </span>
      )}
    </div>
  );
}
