'use server';

import { catchAllQuery } from '@/api/utils/catchAllQuery';
import { ProductMetadata, ProductStaticParams } from './dto/types';
import { GET_PRODUCT_METADATA, GET_PRODUCT_STATIC_PARAMS } from './queries';

export const getProductStaticParams = async () =>
  catchAllQuery<ProductStaticParams>({
    query: GET_PRODUCT_STATIC_PARAMS,
    fetchPolicy: 'cache-first',
  }).then(data => data.productStaticParams);

export const getProductMetadata = async (id: string) =>
  catchAllQuery<ProductMetadata>({
    query: GET_PRODUCT_METADATA,
    variables: { id },
    fetchPolicy: 'cache-first',
  }).then(data => data.productMetadata);
