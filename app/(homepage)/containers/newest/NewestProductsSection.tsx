import { Heading } from '@/components/common';
import { ProductsListSkeleton } from '@/components/features/products';
import { Suspense } from 'react';
import NewestList from './NewestList';

export default function NewestProductsSection() {
  return (
    <section aria-label="Newest products section">
      <div className="mt-16 px-4 sm:px-6 lg:px-8 xl:container xl:mx-auto">
        <Heading as="h2" title="New products" className="text-center" />

        <Suspense
          fallback={
            <ProductsListSkeleton
              numOfCards={2}
              className="[&>div]:bg-custom-pink lg:grid-cols-2"
              direction="row"
            />
          }
        >
          <NewestList />
        </Suspense>
      </div>
    </section>
  );
}
