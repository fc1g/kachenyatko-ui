import { Footer, Header } from '@/components/features';
import { Toaster } from '@/components/ui';
import { Children } from '@/types';
import { getLocale, GTProvider } from 'gt-next/server';
import { Inter } from 'next/font/google';
import { ApolloWrapper } from './(root)/providers';
import './(root)/styles/globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export { generateMetadata } from './(metadata)/marketing/metadata';

export default async function RootLayout({ children }: Readonly<Children>) {
  return (
    <html className="h-full" lang={await getLocale()} suppressHydrationWarning>
      <GTProvider>
        <ApolloWrapper>
          <body className={`${inter.variable} h-full antialiased`}>
            <div className="wrapper">
              <Header />

              <main role="main" className="flex-auto">
                {children}
              </main>

              <Footer />
            </div>

            <Toaster position="bottom-right" />
          </body>
        </ApolloWrapper>
      </GTProvider>
    </html>
  );
}
