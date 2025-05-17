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

export const useBestsellers = (take: number): Product[] => {
  try {
    const { data } = useSuspenseQuery<{
      bestsellers: Product[];
    }>(GET_BESTSELLERS, {
      variables: {
        take,
      },
    });

    return data.bestsellers;
  } catch (err) {
    console.error('💥 Failed to fetch bestsellers:', err);

    if (err instanceof Error) {
      throw new Error(err.message || 'Failed to fetch bestsellers');
    }

    throw new Error('Failed to fetch bestsellers');
  }
};

export const useNewest = (take: number): Product[] => {
  try {
    const { data } = useSuspenseQuery<{
      newest: Product[];
    }>(GET_NEWEST, {
      variables: {
        take,
      },
    });

    return data.newest;
  } catch (err) {
    console.error('💥 Failed to fetch newest:', err);

    if (err instanceof Error) {
      throw new Error(err.message || 'Failed to fetch newest');
    }

    throw new Error('Failed to fetch newest');
  }
};
