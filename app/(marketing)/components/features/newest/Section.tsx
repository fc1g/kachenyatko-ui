import { PreloadQuery } from '@/api';
import { GET_NEWEST, NUM_OF_PRODUCTS } from '@/api/features';
import { ListSkeleton } from '@/app/(shop)/components/features';
import { CustomErrorBoundary, Heading } from '@/components/common';
import { Suspense } from 'react';
import NewestList from './List';

export function NewestSection() {
  return (
    <section aria-label="Newest products section">
      <div className="mt-16 px-4 sm:px-6 lg:px-8 xl:container xl:mx-auto">
        <Heading as="h2" title="New products" className="text-center" />

        <PreloadQuery
          query={GET_NEWEST}
          variables={{ take: NUM_OF_PRODUCTS.NEWEST }}
        >
          <CustomErrorBoundary>
            <Suspense
              fallback={
                <ListSkeleton
                  numOfCards={NUM_OF_PRODUCTS.NEWEST}
                  className="[&>div]:bg-custom-pink lg:grid-cols-2"
                  direction="row"
                />
              }
            >
              <NewestList />
            </Suspense>
          </CustomErrorBoundary>
        </PreloadQuery>
      </div>
    </section>
  );
}
