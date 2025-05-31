import { NEXT_PUBLIC_SITE_URL } from '@/api';
import { Locale } from '@/types';
import { getLocale } from 'gt-next/server';
import type { Metadata } from 'next/types';

type Translation = {
  title: string;
  description: string;
  keywords: string[];
};

const translations: Record<Locale, Translation> = {
  uk: {
    title: 'Каченятко — Кастомні іграшки ручної роботи',
    description:
      'Замовляй унікальні handmade іграшки з доставкою по Україні та за кордон. Переглядай каталог та обирай своє ідеальне каченятко.',
    keywords: [
      'ручна робота',
      'іграшки',
      'каченятко',
      'kachenyatko',
      "в'язані іграшки",
      'український бренд',
      'індивідуальні іграшки',
      'іграшки з доставкою',
      'іграшки з доставкою по Україні',
      'іграшки з доставкою за кордон',
    ],
  },
  en: {
    title: 'Kachenyatko — Custom Handmade Toys',
    description:
      'Order unique handmade toys with delivery across Ukraine and worldwide. Browse the catalog and choose your perfect little duck.',
    keywords: [
      'handmade toys',
      'duck',
      'kachenyatko',
      'knitted toys',
      'ukrainian brand',
      'individual handmade toys',
      'handmade toys with delivery',
      'handmade toys with delivery across Ukraine',
      'handmade toys with delivery across the world',
    ],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const localeKey = Object.prototype.hasOwnProperty.call(
    translations,
    locale as Locale,
  )
    ? (locale as Locale)
    : 'uk';
  const { title, description } = translations[localeKey];
  const siteUrl = NEXT_PUBLIC_SITE_URL;

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      siteName: 'Kachenyatko Store',
      url: siteUrl,
      locale: locale === 'uk' ? 'uk_UA' : 'en_US',
      type: 'website',
      // images: [] // TODO: add images
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      // images: [] // TODO: add images
    },
  };
}
