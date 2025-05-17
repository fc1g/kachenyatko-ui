import { AbstractEntity } from '@/api';
import { Product } from '../entities/types';

export type CreateProductInput = Omit<
  Product,
  keyof AbstractEntity | 'sku' | 'formattedPrice' | 'formattedOldPrice'
>;

export type UpdateProductInput = Partial<CreateProductInput>;
