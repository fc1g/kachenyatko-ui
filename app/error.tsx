'use client';

import CustomError from '@/components/common/CustomError';
import { Button } from '@/components/ui';
import { useGT } from 'gt-next/client';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  const t = useGT();

  return (
    <CustomError
      className="h-screen flex-auto"
      errorMessage={error.message || 'An unexpected error occurred'}
    >
      <Button
        onClick={() => reset()}
        variant="default"
        size="lg"
        className="cursor-pointer"
      >
        {t('Try again')}
      </Button>
    </CustomError>
  );
}
