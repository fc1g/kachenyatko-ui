'use client';

import { ProductPaginationOptions, useProducts } from '@/api/features';
import { ProductsList } from './List';
import { ProductsPagination } from './Pagination';

type ProductsWrapperProps = {
  options: ProductPaginationOptions;
};

export function ProductsWrapper({ options }: ProductsWrapperProps) {
  const { items: products, total } = useProducts(options);

  return (
    <div className="flex-1">
      <ProductsList
        data={products}
        className="[&>div:nth-child(3n+3)]:bg-custom-yellow [&>div:nth-child(3n+2)]:bg-custom-blue [&>div:nth-child(4n+1)]:bg-custom-pink [&>div:nth-child(4)]:bg-custom-blue [&>div:nth-child(7)]:bg-custom-yellow gap-8 sm:grid-cols-2 xl:grid-cols-3"
      />
      {total > 0 && <ProductsPagination total={total} />}
    </div>
  );
}
