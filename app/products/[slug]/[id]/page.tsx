import {
  getProductMetadata,
  getProductStaticParams,
  NEXT_PUBLIC_SITE_URL,
  NUM_OF_PRODUCTS,
  PreloadQuery,
} from '@/api';
import {
  GET_OTHER_PRODUCTS,
  GET_PRODUCT_BY_ID,
} from '@/api/features/products/queries';
import {
  CtaSection,
  CustomErrorBoundary,
  Heading,
  PageBreadcrumbs,
} from '@/components/common';
import { ProductsListSkeleton } from '@/components/features/products';
import { getGT, getLocale } from 'gt-next/server';
import type { Metadata } from 'next/types';
import { Suspense } from 'react';
import OtherProducts from '../components/OtherProducts';
import ProductInfo from '../components/ProductInfo';
import ProductInfoSkeleton from '../components/ProductInfoSkeleton';

type ProductPageParams = {
  params: Promise<{
    id: string;
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const staticParams = await getProductStaticParams();

  return staticParams.map(param => ({
    ...param,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageParams): Promise<Metadata> {
  const { id, slug } = await params;
  const locale = await getLocale();
  const t = await getGT();

  const metadata = await getProductMetadata(id);

  if (!metadata) {
    return {
      title: t('Product not found'),
      description: t('This product does not exist or has been removed.'),
    };
  }

  const title = t(metadata.name);
  const description = t(metadata.shortDescription);

  return {
    title: `${title} | Kachenyatko store`,
    description,
    openGraph: {
      title: `${title} | Kachenyatko store`,
      description,
      siteName: 'Kachenyatko store',
      url: `${NEXT_PUBLIC_SITE_URL}/products/${slug}/${id}`,
      locale: locale === 'uk' ? 'uk_UA' : 'en_US',
      images: metadata.images.map(image => ({
        url: image.url,
        alt: image.altText,
        width: 1200,
        height: 630,
      })),
      type: 'website',
    },
    twitter: {
      title: `${title} | Kachenyatko store`,
      description,
    },
  };
}

export const revalidate = 60;

export default async function ProductPage({ params }: ProductPageParams) {
  const { id } = await params;

  return (
    <>
      <PageBreadcrumbs pathname={`/products/${id}`} basePath="products" />

      <PreloadQuery query={GET_PRODUCT_BY_ID} variables={{ id }}>
        <CustomErrorBoundary>
          <Suspense fallback={<ProductInfoSkeleton />}>
            <ProductInfo id={id} />
          </Suspense>
        </CustomErrorBoundary>
      </PreloadQuery>

      <div className="my-16 flex flex-col px-[clamp(1.5rem,2vw,3rem)]">
        <Heading as="h2" title="Other products" />

        <PreloadQuery query={GET_OTHER_PRODUCTS} variables={{ id }}>
          <CustomErrorBoundary>
            <Suspense
              fallback={
                <ProductsListSkeleton
                  numOfCards={NUM_OF_PRODUCTS.OTHER}
                  className="[&>div:nth-child(1)]:bg-custom-pink [&>div:nth-child(2)]:bg-custom-blue [&>div:nth-child(3)]:bg-custom-yellow [&>div:nth-child(4)]:bg-custom-pink sm:grid-cols-2 xl:grid-cols-4"
                />
              }
            >
              <OtherProducts id={id} />
            </Suspense>
          </CustomErrorBoundary>
        </PreloadQuery>
      </div>

      <CtaSection />
    </>
  );
}
