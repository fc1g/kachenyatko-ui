import { AbstractEntity } from '@/api';
import { Product } from '../entities/types';

export type CreateProductInput = Omit<
  Product,
  keyof AbstractEntity | 'sku' | 'slug' | 'formattedPrice' | 'formattedOldPrice'
>;

export type UpdateProductInput = Partial<CreateProductInput>;
