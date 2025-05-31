'use client';

import { NUM_OF_PRODUCTS, useBestsellers } from '@/api/features';
import { ProductsList } from '@/app/(shop)/components/features';

export default function BestsellersList() {
  const bestsellers = useBestsellers(NUM_OF_PRODUCTS.BESTSELLER);

  return (
    <ProductsList
      emptyMessage="No bestsellers found"
      data={bestsellers}
      className="[&>div:nth-child(1)]:bg-custom-yellow [&>div:nth-child(2)]:bg-custom-pink [&>div:nth-child(3)]:bg-custom-blue md:grid-cols-3"
    />
  );
}
