import ProductsCardSkeleton from '@/components/products/ProductsCardSkeleton';
import { Suspense } from 'react';
import SectionHeading from '../../components/SectionHeading';
import Cards from './Cards';

export default function Bestsellers() {
  return (
    <section aria-label="Bestsellers section">
      <div className="px-4 sm:px-6 lg:px-8 xl:container xl:mx-auto">
        <SectionHeading title="Bestsellers" />

        <Suspense fallback={<ProductsCardSkeleton numOfCards={3} />}>
          <Cards />
        </Suspense>
      </div>
    </section>
  );
}
