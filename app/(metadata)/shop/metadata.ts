import { NEXT_PUBLIC_SITE_URL } from '@/api';
import { getProductMetadata } from '@/api/features';
import { getGT, getLocale } from 'gt-next/server';
import type { Metadata } from 'next/types';

type MetadataParams = {
  params: Promise<{
    id: string;
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: MetadataParams): Promise<Metadata> {
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
  const siteUrl = `${NEXT_PUBLIC_SITE_URL}/products/${slug}/${id}`;

  return {
    title: `${title} | Kachenyatko Store`,
    description,
    keywords: metadata.categories.map(category => t(category.name)),
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${title} | Kachenyatko Store`,
      description,
      siteName: 'Kachenyatko Store',
      url: siteUrl,
      locale: locale === 'uk' ? 'uk_UA' : 'en_US',
      type: 'website',
      images: metadata.images.map(image => ({
        url: image.url,
        alt: image.altText,
        width: 1200,
        height: 630,
      })),
    },
    twitter: {
      title: `${title} | Kachenyatko Store`,
      description,
      card: 'summary_large_image',
      images: metadata.images.map(image => ({
        url: image.url,
        alt: image.altText,
        width: 1200,
        height: 630,
      })),
    },
  };
}
