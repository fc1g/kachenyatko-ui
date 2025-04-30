import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

type ProductCardSkeletonProps = {
  numOfCards: number;
  direction?: 'row' | 'column';
};

export default function ProductCardSkeleton({
  numOfCards,
  direction = 'column',
}: ProductCardSkeletonProps) {
  return (
    <div
      className={`${direction === 'row' ? '[&>div]:bg-custom-pink mt-8 gap-12 lg:grid-cols-2' : '[&>div]:first:bg-custom-yellow [&>div]:even:bg-custom-pink [&>div]:last:bg-custom-blue mt-12 gap-8 md:grid-cols-3 lg:gap-12'} grid grid-cols-1 justify-items-center`}
    >
      {Array.from({ length: numOfCards }).map((_, i) => (
        <Card
          key={i}
          className={cn(
            'w-full max-w-[25rem]',
            direction === 'row' ? 'sm:max-w-full sm:flex-row' : 'md:max-w-full',
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
                <Skeleton className="h-4 md:h-[0.875rem] lg:h-4" />
                <Skeleton className="h-4 md:h-[0.875rem] lg:h-4" />
                <Skeleton
                  className={`${direction === 'column' ? 'xl:hidden' : ''} h-4 md:h-[0.875rem] lg:h-4`}
                />
              </div>
            </div>

            <Skeleton className="h-8" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
