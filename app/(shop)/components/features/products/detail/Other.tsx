'use client';

import { NUM_OF_PRODUCTS, useOtherProducts } from '@/api/features';
import { ProductsList } from '../list';

type OtherProductsProps = {
  id: string;
};

export function OtherProducts({ id }: OtherProductsProps) {
  const otherProducts = useOtherProducts(id, NUM_OF_PRODUCTS.OTHER);

  return (
    <ProductsList
      emptyMessage="No similar products found"
      data={otherProducts}
      className="[&>div:nth-child(1)]:bg-custom-pink [&>div:nth-child(2)]:bg-custom-blue [&>div:nth-child(3)]:bg-custom-yellow [&>div:nth-child(4)]:bg-custom-pink sm:grid-cols-2 xl:grid-cols-4"
    />
  );
}
