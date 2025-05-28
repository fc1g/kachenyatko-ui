'use server';

import { query } from '@/api';
import { QueryOptions } from '@apollo/client';

export const catchAllQuery = async <T>(options: QueryOptions): Promise<T> => {
  try {
    const { data } = await query(options);
    return data;
  } catch (err) {
    console.error('💥 Failed to fetch data:', err);

    if (err instanceof Error) {
      throw new Error(err.message || 'Failed to fetch data');
    }

    throw new Error('Failed to fetch data');
  }
};
