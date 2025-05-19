import { cn } from '@/lib';
import { useGT } from 'gt-next/client';

type CustomErrorProps = {
  className: string;
  errorMessage: string;
  children?: React.ReactNode;
};

export default function CustomError({
  className,
  errorMessage,
  children,
}: CustomErrorProps) {
  const t = useGT();

  return (
    <section
      role="alert"
      aria-label="Error"
      className={cn('flex w-full items-center justify-center', className)}
    >
      <div className="mx-auto flex max-w-screen-lg flex-col items-center gap-4 px-4 py-8 lg:px-6 lg:py-16">
        <h2
          aria-label="Error message"
          className="text-secondary-foreground mb-4 text-3xl font-bold tracking-tight md:text-4xl"
        >
          {t(errorMessage) || 'An unexpected error occurred'}
        </h2>

        {children}
      </div>
    </section>
  );
}
