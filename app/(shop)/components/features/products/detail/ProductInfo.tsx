'use client';

import { useProductById } from '@/api/features';
import { ClientHeading } from '@/components/common';
import { useGT } from 'gt-next/client';
import { notFound } from 'next/navigation';
import { useMemo } from 'react';
import { ProductPrice } from '../shared';
import { ProductAction } from './Action';
import { ProductColorSelector } from './ColorSelector';
import { ProductDescription } from './Description';
import { ProductDetails } from './Details';
import { ProductGallery } from './Gallery';

type ProductInfoProps = {
  id: string;
};

type Specification = {
  size: string;
  material: string;
  ageGroup: string;
  packageSize: string;
};

export function ProductInfo({ id }: ProductInfoProps) {
  const product = useProductById(id);
  const t = useGT();

  if (!product) notFound();

  const {
    name,
    sku,
    fullDescription,
    formattedPrice,
    formattedOldPrice,
    images,
    details,
    specification,
    colors,
    stock,
  } = product;

  const specificationEntries = useMemo(() => {
    return Object.entries(specification as Specification).map(
      ([key, value]) => ({
        key,
        value,
      }),
    );
  }, [specification]);

  return (
    <div className="mt-12 grid grid-cols-1 gap-[clamp(2rem,5vw,4rem)] md:grid-cols-2">
      <ProductGallery images={images} />

      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <ClientHeading
            title={name}
            as="h1"
            className="text-[clamp(1.5rem,5vw,2.5rem)]"
          />

          <span className="text-custom-gray text-sm font-medium">
            {`${t('Product code')}: ${sku}`}
          </span>
        </div>

        <ProductPrice
          formattedPrice={formattedPrice}
          formattedOldPrice={formattedOldPrice}
        />

        <ProductDetails
          title="Product details"
          details={details}
          className="sm:max-w-sm"
        />

        <ProductColorSelector colors={colors} />

        <ProductAction stock={stock} />

        <ProductDescription description={fullDescription} />

        <ProductDetails
          title="Product specification"
          details={specificationEntries}
          className="max-w-lg"
        />
      </div>
    </div>
  );
}
