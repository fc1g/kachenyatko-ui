import { PreloadQuery } from '@/api';
import {
  GET_PRODUCT_CATEGORIES,
  GET_PRODUCTS,
  ProductPaginationOptions,
  PRODUCTS_PAGINATION,
} from '@/api/features';
import {
  CustomErrorBoundary,
  Heading,
  PageBreadcrumbs,
} from '@/components/common';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import {
  ListSkeleton,
  ListWithPaginationSkeleton,
  ProductsFilteringMenu,
  ProductsFilteringMenuSkeleton,
  ProductsLimitingAndSortingMenu,
  ProductsWrapper,
} from '../components/features';

type ProductsPageProps = {
  searchParams: Promise<ReadonlyURLSearchParams>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const currSearchParams = new URLSearchParams(await searchParams);
  const take = Number(
    currSearchParams.get('limit') || PRODUCTS_PAGINATION.LIMIT,
  );
  const page = Number(currSearchParams.get('page') || PRODUCTS_PAGINATION.PAGE);
  const sort = (currSearchParams.get('sort')?.toUpperCase() ||
    PRODUCTS_PAGINATION.SORT) as 'ASC' | 'DESC';
  const categoryIds = currSearchParams.getAll('category') || [];
  const skip = (page - 1) * take;

  const options: ProductPaginationOptions = {
    sort,
    take,
    skip,
    categoryIds,
  };

  return (
    <div className="px-[clamp(2rem,3vw,4rem)]">
      <PageBreadcrumbs pathname="/products" />

      <ProductsLimitingAndSortingMenu>
        <Heading as="h2" title="Products" className="mt-12 text-left" />
      </ProductsLimitingAndSortingMenu>

      <div className="flex flex-col gap-8 lg:flex-row">
        <PreloadQuery query={GET_PRODUCT_CATEGORIES}>
          <CustomErrorBoundary>
            <Suspense fallback={<ProductsFilteringMenuSkeleton />}>
              <ProductsFilteringMenu />
            </Suspense>
          </CustomErrorBoundary>
        </PreloadQuery>

        <PreloadQuery query={GET_PRODUCTS} variables={{ options }}>
          <CustomErrorBoundary>
            <Suspense
              fallback={
                <ListWithPaginationSkeleton>
                  <ListSkeleton
                    className="[&>div:nth-child(3n+3)]:bg-custom-yellow [&>div:nth-child(3n+2)]:bg-custom-blue [&>div:nth-child(4n+1)]:bg-custom-pink [&>div:nth-child(4)]:bg-custom-blue [&>div:nth-child(7)]:bg-custom-yellow gap-8 sm:grid-cols-2 xl:grid-cols-3"
                    numOfCards={take}
                  />
                </ListWithPaginationSkeleton>
              }
            >
              <ProductsWrapper options={options} />
            </Suspense>
          </CustomErrorBoundary>
        </PreloadQuery>
      </div>
    </div>
  );
}
