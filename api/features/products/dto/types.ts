import { AbstractEntity } from '@/api';
import { Product } from '../entities/types';

export type CreateProductInput = Omit<
  Product,
  keyof AbstractEntity | 'sku' | 'formattedPrice' | 'formattedOldPrice'
>;

export type UpdateProductInput = Partial<CreateProductInput>;

export type ProductStaticParams = {
  productStaticParams: {
    id: string;
    slug: string;
  }[];
};

export type ProductMetadata = {
  productMetadata: {
    name: string;
    shortDescription: string;
    images: {
      url: string;
      altText: string;
    }[];
  };
};
