import { PreloadQuery } from '@/api';
import { GET_BESTSELLERS, NUM_OF_PRODUCTS } from '@/api/features/products';
import { ListSkeleton } from '@/app/(shop)/components/features/products/skeleton';
import { CustomErrorBoundary, Heading } from '@/components/common';
import { Suspense } from 'react';
import BestsellersList from './List';

export function BestsellersSection() {
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
                <ListSkeleton
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
