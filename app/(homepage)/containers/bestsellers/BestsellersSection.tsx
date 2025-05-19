import { NUM_OF_PRODUCTS, PreloadQuery } from '@/api';
import { GET_BESTSELLERS } from '@/api/features/products/queries';
import { CustomErrorBoundary, Heading } from '@/components/common';
import { ProductsListSkeleton } from '@/components/features/products';
import { Suspense } from 'react';
import BestsellersList from './BestsellersList';

export default function BestsellersSection() {
  return (
    <section aria-label="Bestsellers section">
      <div className="px-4 sm:px-6 lg:px-8 xl:container xl:mx-auto">
        <Heading as="h2" title="Bestsellers" className="text-center" />

        <PreloadQuery
          query={GET_BESTSELLERS}
          variables={{ take: NUM_OF_PRODUCTS.BESTSELLER }}
        >
          <CustomErrorBoundary>
            <Suspense
              fallback={
                <ProductsListSkeleton
                  className="[&>div:nth-child(1)]:bg-custom-yellow [&>div:nth-child(2)]:bg-custom-pink [&>div:nth-child(3)]:bg-custom-blue md:grid-cols-3"
                  numOfCards={NUM_OF_PRODUCTS.BESTSELLER}
                />
              }
            >
              <BestsellersList />
            </Suspense>
          </CustomErrorBoundary>
        </PreloadQuery>
      </div>
    </section>
  );
}
