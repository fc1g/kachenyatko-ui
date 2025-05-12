import ProductsListSkeleton from '@/components/features/products/skeleton/ProductsListSkeleton';
import { Suspense } from 'react';
import Cards from './Cards';

export default function NewestProductsSuspense() {
  return (
    <Suspense
      fallback={
        <ProductsListSkeleton
          numOfCards={2}
          className="[&>div]:bg-custom-pink lg:grid-cols-2"
          direction="row"
        />
      }
    >
      <Cards />
    </Suspense>
  );
}
