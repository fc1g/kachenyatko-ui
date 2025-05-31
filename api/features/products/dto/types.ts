import { AbstractEntity } from '@/api';
import { Product, ProductCategory, ProductImage } from '../entities/types';

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
    images: ProductImage[];
    categories: ProductCategory[];
  };
};

export type ProductPaginationOptions = {
  take: number;
  skip: number;
  sort: 'ASC' | 'DESC' | 'asc' | 'desc';
  categoryIds: string[];
};
