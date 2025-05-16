import { useMutation } from '@apollo/client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { CreateProductInput } from './dto/types';
import { Product } from './entities/types';
import { CREATE_PRODUCT } from './mutations';
import { GET_BESTSELLERS, GET_NEWEST } from './queries';

export const useCreateProduct = () => {
  return useMutation<{ createProduct: Product }, { input: CreateProductInput }>(
    CREATE_PRODUCT,
  );
};

export const useBestsellers = (take: number) => {
  const { data } = useSuspenseQuery<{
    bestsellers: Product[];
  }>(GET_BESTSELLERS, {
    variables: {
      take,
    },
  });

  return data.bestsellers;
};

export const useNewest = (take: number) => {
  const { data } = useSuspenseQuery<{
    newest: Product[];
  }>(GET_NEWEST, {
    variables: {
      take,
    },
  });

  return data.newest;
};
