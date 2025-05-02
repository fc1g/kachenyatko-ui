'use client';

import { Button } from '@/components/ui/button';
import { useGT } from 'gt-next/client';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  const t = useGT();

  return (
    <section
      role="alert"
      className="flex h-screen w-full flex-auto items-center justify-center"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="text-secondary-foreground mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t(error.message)}
          </h2>

          <Button
            onClick={() => reset()}
            variant="default"
            size="lg"
            className="cursor-pointer"
          >
            {t('Try again')}
          </Button>
        </div>
      </div>
    </section>
  );
}
