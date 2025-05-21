import { useSuspenseQuery } from '@apollo/client';
import { ProductPaginationOptions } from './dto/types';
import { Product, ProductCategory } from './entities/types';
import {
  GET_BESTSELLERS,
  GET_NEWEST,
  GET_OTHER_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_SKU,
  GET_PRODUCT_CATEGORIES,
  GET_PRODUCTS,
} from './queries';

export const useProducts = (
  options: ProductPaginationOptions,
): { items: Product[]; total: number } => {
  const { data } = useSuspenseQuery<{
    products: { items: Product[]; total: number };
  }>(GET_PRODUCTS, {
    variables: {
      options,
    },
    fetchPolicy: 'cache-first',
  });

  return data.products;
};

export const useBestsellers = (take: number): Product[] => {
  const { data } = useSuspenseQuery<{
    bestsellers: Product[];
  }>(GET_BESTSELLERS, {
    variables: {
      take,
    },
    fetchPolicy: 'cache-first',
  });

  return data.bestsellers;
};

export const useNewest = (take: number): Product[] => {
  const { data } = useSuspenseQuery<{ newest: Product[] }>(GET_NEWEST, {
    variables: {
      take,
    },
    fetchPolicy: 'cache-first',
  });

  return data.newest;
};

export const useOtherProducts = (id: string, take: number): Product[] => {
  const { data } = useSuspenseQuery<{
    otherProducts: Product[];
  }>(GET_OTHER_PRODUCTS, {
    variables: {
      id,
      take,
    },
    fetchPolicy: 'cache-first',
  });

  return data.otherProducts;
};

export const useProductById = (id: string): Product => {
  const { data } = useSuspenseQuery<{ product: Product }>(GET_PRODUCT_BY_ID, {
    variables: {
      id,
    },
    fetchPolicy: 'cache-first',
  });

  return data.product;
};

export const useProductBySku = (sku: string): Product => {
  const { data } = useSuspenseQuery<{ productBySku: Product }>(
    GET_PRODUCT_BY_SKU,
    {
      variables: {
        sku,
      },
      fetchPolicy: 'cache-first',
    },
  );

  return data.productBySku;
};

export const useProductCategories = (): ProductCategory[] => {
  const { data } = useSuspenseQuery<{ categories: ProductCategory[] }>(
    GET_PRODUCT_CATEGORIES,
  );

  return data.categories;
};
