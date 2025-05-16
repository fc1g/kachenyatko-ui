'use client';

import { useBestsellers } from '@/api';
import { ProductsList } from '@/components/features';

export default function BestsellersList() {
  const bestsellers = useBestsellers(3);

  return (
    <ProductsList
      data={bestsellers}
      className="[&>div:nth-child(1)]:bg-custom-yellow [&>div:nth-child(2)]:bg-custom-pink [&>div:nth-child(3)]:bg-custom-blue md:grid-cols-3"
    />
  );
}
