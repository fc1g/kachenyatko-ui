'use server';

import { catchAll } from '@/api/utils/catchAll';
import { ProductMetadata, ProductStaticParams } from './dto/types';
import { GET_PRODUCT_METADATA, GET_PRODUCT_STATIC_PARAMS } from './queries';

export const getProductStaticParams = async () =>
  catchAll<ProductStaticParams>({
    query: GET_PRODUCT_STATIC_PARAMS,
    fetchPolicy: 'cache-first',
  }).then(data => data.productStaticParams);

export const getProductMetadata = async (id: string) =>
  catchAll<ProductMetadata>({
    query: GET_PRODUCT_METADATA,
    variables: { id },
    fetchPolicy: 'cache-first',
  }).then(data => data.productMetadata);
