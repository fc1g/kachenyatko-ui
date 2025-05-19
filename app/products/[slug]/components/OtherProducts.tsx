'use client';

import { NUM_OF_PRODUCTS, useOtherProducts } from '@/api';
import { ProductsList } from '@/components/features';

type OtherProductsProps = {
  id: string;
};

export default function OtherProducts({ id }: OtherProductsProps) {
  const otherProducts = useOtherProducts(id, NUM_OF_PRODUCTS.OTHER);

  if (otherProducts.length === 0)
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-custom-black text-[clamp(1.5rem,5vw,2rem)] font-bold">
          No similar products found
        </p>
      </div>
    );

  return (
    <ProductsList
      data={otherProducts}
      className="[&>div:nth-child(1)]:bg-custom-pink [&>div:nth-child(2)]:bg-custom-blue [&>div:nth-child(3)]:bg-custom-yellow [&>div:nth-child(4)]:bg-custom-pink sm:grid-cols-2 xl:grid-cols-4"
    />
  );
}
