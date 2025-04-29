import ProductCardSkeleton from '@/components/products/ProductCardSkeleton';
import { T } from 'gt-next';
import { Suspense } from 'react';
import Cards from './Cards';

export default function Bestsellers() {
  return (
    <section aria-label="Bestsellers section">
      <div className="px-4 sm:px-6 lg:px-8 xl:container xl:mx-auto">
        <T>
          <h2 className="text-center text-[clamp(1.5rem,6vw,2.5rem)] font-bold">
            Bestsellers
          </h2>

          <Suspense fallback={<ProductCardSkeleton />}>
            <Cards />
          </Suspense>
        </T>
      </div>
    </section>
  );
}
