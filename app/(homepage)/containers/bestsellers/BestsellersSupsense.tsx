import ProductsListSkeleton from '@/components/features/products/skeleton/ProductsListSkeleton';
import { Suspense } from 'react';
import Cards from './Cards';

export default function BestsellersSupsense() {
  return (
    <Suspense
      fallback={
        <ProductsListSkeleton
          className="[&>div:nth-child(1)]:bg-custom-yellow [&>div:nth-child(2)]:bg-custom-pink [&>div:nth-child(3)]:bg-custom-blue md:grid-cols-3"
          numOfCards={3}
        />
      }
    >
      <Cards />
    </Suspense>
  );
}
