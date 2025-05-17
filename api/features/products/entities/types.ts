import { AbstractEntity } from '@/api';

export type Product = AbstractEntity & {
  name: string;
  slug: string;
  sku: string;
  colors: string[];
  shortDescription: string;
  fullDescription: string;
  price: number;
  formattedPrice: string;
  formattedOldPrice: string | null;
  discount: number;
  stock: number;
  totalSold: number;
  images: ProductImage[];
  details: ProductDetail[];
  specification: ProductSpecification;
  categories: ProductCategory[];
};

export type ProductImage = AbstractEntity & {
  url: string;
  altText: string;
  position: number;
};

export type ProductDetail = AbstractEntity & {
  key: string;
  value: string;
};

export type ProductSpecification = AbstractEntity & {
  size: string;
  material: string;
  ageGroup: string;
  packageSize: string;
};

export type ProductCategory = AbstractEntity & {
  name: string;
  slug: string;
};
