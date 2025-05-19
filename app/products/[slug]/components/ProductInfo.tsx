'use client';

import { useProductById } from '@/api';
import {
  ProductAction,
  ProductColors,
  ProductDescription,
  ProductDetails,
  ProductGallery,
  ProductPrice,
} from '@/components/features/products';
import { useGT } from 'gt-next/client';
import { useMemo } from 'react';

type ProductInfoProps = {
  id: string;
};

type Specification = {
  size: string;
  material: string;
  ageGroup: string;
  packageSize: string;
};

export default function ProductInfo({ id }: ProductInfoProps) {
  const product = useProductById(id);
  const t = useGT();

  const specification = useMemo(() => {
    return Object.entries(product.specification as Specification).map(
      ([key, value]) => ({
        key,
        value,
      }),
    );
  }, [product.specification]);

  return (
    <div className="px-[clamp(1.5rem,2vw,3rem)]">
      <div className="mt-12 grid grid-cols-1 gap-[clamp(2rem,5vw,4rem)] md:grid-cols-2">
        <ProductGallery images={product.images} />

        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h1 className="text-custom-black text-[clamp(1.5rem,5vw,2.5rem)] leading-tight font-bold">
              {t(product.name)}
            </h1>

            <span className="text-custom-gray text-sm font-medium">
              {`${t('Product code')}: ${product.sku}`}
            </span>
          </div>

          <ProductPrice
            formattedPrice={product.formattedPrice}
            formattedOldPrice={product.formattedOldPrice}
          />

          <ProductDetails
            title="Product details"
            details={product.details}
            className="sm:max-w-sm"
          />

          <ProductColors colors={product.colors} />

          <ProductAction stock={product.stock} />

          <ProductDescription description={product.fullDescription} />

          <ProductDetails
            title="Product specification"
            details={specification}
            className="max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}
