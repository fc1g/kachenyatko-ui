'use client';

import { Button } from '@/components/ui';
import { useGT } from 'gt-next/client';
import Link from 'next/link';

export default function NotFound() {
  const t = useGT();

  return (
    <section className="flex w-full flex-1 items-center justify-center">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="text-primary mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
            404
          </h1>
          <p className="text-secondary-foreground mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t("Something's missing.")}
          </p>
          <p className="text-muted-foreground mb-4 text-lg font-light">
            {t(
              "Sorry, we can't find that page. You'll find lots to explore on the home page.",
            )}
          </p>
          <Button variant="default" size="lg" className="cursor-pointer">
            <Link href="/">{t('Back to Homepage')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
