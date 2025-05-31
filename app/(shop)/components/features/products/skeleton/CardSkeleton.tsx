import { Card, CardContent, CardHeader } from '@/app/(shop)/components/ui';
import { Skeleton } from '@/components/ui';
import { cn } from '@/lib/utils';

type CardSkeletonProps = {
  direction?: 'row' | 'column';
};

export function CardSkeleton({ direction = 'column' }: CardSkeletonProps) {
  return (
    <Card
      className={cn(
        'w-full max-w-[25rem]',
        direction === 'row'
          ? 'sm:max-w-full sm:flex-row sm:gap-0 lg:gap-6'
          : 'md:max-w-full',
      )}
    >
      <CardHeader
        className={`${direction === 'row' ? 'sm:w-96 lg:w-full' : ''}`}
      >
        <Skeleton className="h-44 w-full md:h-[clamp(10rem,15vw,16rem)]" />
      </CardHeader>

      <CardContent className="w-full">
        <div className="mb-6 flex flex-col gap-2">
          <Skeleton className="h-7 md:h-6 lg:h-7" />

          <div className="flex flex-col gap-2">
            <Skeleton className="h-[clamp(.875rem,2vw,1rem)]" />
            <Skeleton className="h-[clamp(.875rem,2vw,1rem)]" />
            <Skeleton
              className={`${direction === 'column' ? 'xl:hidden' : ''} h-[clamp(.875rem,2vw,1rem)]`}
            />
          </div>
        </div>

        <Skeleton className="h-8" />
      </CardContent>
    </Card>
  );
}
