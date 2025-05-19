import { useSuspenseQuery } from '@apollo/client';
import { Product } from './entities/types';
import {
  GET_BESTSELLERS,
  GET_NEWEST,
  GET_OTHER_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_SKU,
} from './queries';

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
