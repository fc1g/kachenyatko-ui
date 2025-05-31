'use client';

import { NUM_OF_PRODUCTS, useNewest } from '@/api/features';
import { ProductsList } from '@/app/(shop)/components/features';

export default function NewestList() {
  const newest = useNewest(NUM_OF_PRODUCTS.NEWEST);

  return (
    <ProductsList
      emptyMessage="No newest products found"
      data={newest}
      direction="row"
      className="[&>div]:bg-custom-pink lg:grid-cols-2"
    />
  );
}
