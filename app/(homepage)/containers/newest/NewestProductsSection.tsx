import ProductCardSkeleton from '@/components/products/ProductsCardSkeleton';
import { Suspense } from 'react';
import SectionHeading from '../../components/SectionHeading';
import Cards from './Cards';

export default function NewestProductsSection() {
  return (
    <section aria-label="Newest products section">
      <div className="mt-16 px-4 sm:px-6 lg:px-8 xl:container xl:mx-auto">
        <SectionHeading title="New products" />

        <Suspense
          fallback={<ProductCardSkeleton numOfCards={2} direction="row" />}
        >
          <Cards />
        </Suspense>
      </div>
    </section>
  );
}
