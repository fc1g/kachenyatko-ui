import Footer from '@/components/features/footer/Footer';
import Header from '@/components/features/header/Header';
import { Children } from '@/types/Children';
import { Locale } from '@/types/Locale';
import { getLocale } from 'gt-next/server';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './(utils)/globals.css';
import Providers from './(utils)/providers';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const translations = {
    uk: {
      title: 'Каченятко — Кастомні іграшки ручної роботи',
      description:
        'Замовляй унікальні handmade іграшки з доставкою по Україні та за кордон. Переглядай каталог та обирай своє ідеальне каченятко.',
    },
    en: {
      title: 'Kachenyatko — Custom Handmade Toys',
      description:
        'Order unique handmade toys with delivery across Ukraine and worldwide. Browse the catalog and choose your perfect little duck.',
    },
  };

  const t = translations[locale as Locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      locale: locale === 'uk' ? 'uk_UA' : 'en_US',
    },
    twitter: {
      title: t.title,
      description: t.description,
    },
  };
}

export default async function RootLayout({ children }: Readonly<Children>) {
  return (
    <html className="h-full" lang={await getLocale()} suppressHydrationWarning>
      <body className={`${inter.variable} h-full antialiased`}>
        <Providers>
          <Header />

          <main role="main" className="flex-auto">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
