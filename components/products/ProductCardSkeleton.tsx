import { Card, CardContent, CardHeader } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

export default function ProductCardSkeleton() {
  return (
    <div className="[&>div]:first:bg-custom-yellow [&>div]:even:bg-custom-pink [&>div]:last:bg-custom-blue mt-12 grid grid-cols-1 justify-items-center gap-12 md:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card key={i} className="w-full max-w-[25rem] md:max-w-full">
          <CardHeader>
            <Skeleton className="h-44 w-full md:h-[clamp(10rem,15vw,16rem)]" />
          </CardHeader>

          <CardContent>
            <div className="mb-6 flex flex-col gap-2">
              <Skeleton className="h-7 md:h-6 lg:h-7" />

              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 md:h-[0.875rem] lg:h-4" />
                <Skeleton className="h-4 md:h-[0.875rem] lg:h-4" />
                <Skeleton className="h-4 md:h-[0.875rem] lg:h-4 xl:hidden" />
              </div>
            </div>

            <Skeleton className="h-8" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
