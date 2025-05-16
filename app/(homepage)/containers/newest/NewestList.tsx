'use client';

import { useNewest } from '@/api';
import { ProductsList } from '@/components/features';

export default function NewestList() {
  const newest = useNewest(2);

  return (
    <ProductsList
      data={newest}
      direction="row"
      className="[&>div]:bg-custom-pink lg:grid-cols-2"
    />
  );
}
