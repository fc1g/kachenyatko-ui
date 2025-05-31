import { PreloadQuery } from '@/api';
import {
  GET_OTHER_PRODUCTS,
  GET_PRODUCT_BY_ID,
  NUM_OF_PRODUCTS,
} from '@/api/features';
import {
  ListSkeleton,
  ListWithPaginationSkeleton,
  OtherProducts,
  ProductInfo,
  ProductPageSkeleton,
} from '@/app/(shop)/components/features';
import {
  CustomErrorBoundary,
  Heading,
  NewsletterCtaSection,
  PageBreadcrumbs,
} from '@/components/common';
import { Suspense } from 'react';

type ProductPageParams = {
  params: Promise<{
    id: string;
    slug: string;
  }>;
};

export {
  generateMetadata,
  generateStaticParams,
  revalidate,
} from '@/app/(metadata)/shop';

export default async function ProductPage({ params }: ProductPageParams) {
  const { id } = await params;

  return (
    <>
      <div className="px-[clamp(2rem,3vw,4rem)]">
        <PageBreadcrumbs pathname={`/products/${id}`} basePath="products" />

        <PreloadQuery query={GET_PRODUCT_BY_ID} variables={{ id }}>
          <CustomErrorBoundary>
            <Suspense fallback={<ProductPageSkeleton />}>
              <ProductInfo id={id} />
            </Suspense>
          </CustomErrorBoundary>
        </PreloadQuery>
      </div>

      <div className="my-16 flex flex-col px-[clamp(1.5rem,2vw,3rem)]">
        <Heading as="h2" title="Other products" />

        <PreloadQuery query={GET_OTHER_PRODUCTS} variables={{ id }}>
          <CustomErrorBoundary>
            <Suspense
              fallback={
                <ListWithPaginationSkeleton>
                  <ListSkeleton
                    numOfCards={NUM_OF_PRODUCTS.OTHER}
                    className="[&>div:nth-child(1)]:bg-custom-pink [&>div:nth-child(2)]:bg-custom-blue [&>div:nth-child(3)]:bg-custom-yellow [&>div:nth-child(4)]:bg-custom-pink sm:grid-cols-2 xl:grid-cols-4"
                  />
                </ListWithPaginationSkeleton>
              }
            >
              <OtherProducts id={id} />
            </Suspense>
          </CustomErrorBoundary>
        </PreloadQuery>
      </div>

      <NewsletterCtaSection />
    </>
  );
}
