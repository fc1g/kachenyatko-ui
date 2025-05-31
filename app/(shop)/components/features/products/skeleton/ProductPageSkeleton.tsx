import { Skeleton } from '@/components/ui';
import { nanoid } from 'nanoid';

export function ProductPageSkeleton() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-[clamp(2rem,5vw,4rem)] px-[clamp(1.5rem,2vw,3rem)] md:grid-cols-2">
      {/* Gallery */}
      <div className="flex flex-col gap-4 px-2 lg:px-0">
        <Skeleton className="bg-custom-secondary inline-flex h-[clamp(12rem,45vw,36rem)] w-full rounded-md" />

        <ul
          role="list"
          className="hidden md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5"
          style={{ gridTemplateColumns: `repeat(minmax(6rem, 1fr), 1fr)` }}
        >
          {Array.from({ length: 5 }).map(() => (
            <li key={nanoid(6)} role="listitem">
              <Skeleton className="bg-custom-secondary block h-24 w-full rounded-md" />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        {/* Name and code */}
        <div className="space-y-2">
          <Skeleton className="bg-custom-secondary h-[clamp(1.5rem,5vw,2.5rem)] w-full" />

          <Skeleton className="bg-custom-secondary h-[18px] w-full" />
          <Skeleton className="bg-custom-secondary h-[18px] w-1/2 sm:hidden" />
        </div>

        {/* Price */}
        <Skeleton className="bg-custom-secondary h-8 w-full" />

        {/* Details */}
        <div className="flex flex-col gap-4">
          <Skeleton className="bg-custom-secondary h-[clamp(1.25rem,5vw,1.5rem)] w-full" />

          <ul role="list" className="flex flex-col gap-2">
            {Array.from({ length: 4 }).map(() => (
              <li
                role="listitem"
                key={nanoid(6)}
                className="grid grid-cols-2 sm:max-w-sm"
              >
                <Skeleton className="bg-custom-secondary h-4 w-full" />
                <Skeleton className="bg-custom-secondary h-4 w-full" />
              </li>
            ))}
          </ul>
        </div>

        {/* Colors */}
        <div className="my-4 flex items-center gap-6">
          <Skeleton className="bg-custom-secondary h-[clamp(1.25rem,5vw,1.5rem)] w-32" />

          <ul role="list" className="flex items-center gap-4">
            {Array.from({ length: 2 }).map(() => {
              return (
                <li role="listitem" key={nanoid(6)}>
                  <Skeleton className="bg-custom-secondary h-10 w-10 rounded-full" />
                </li>
              );
            })}
          </ul>
        </div>

        {/* Action */}
        <div className="my-2 flex items-center gap-6">
          <div className="flex items-center gap-6">
            <Skeleton className="bg-custom-secondary h-8 w-8 rounded-md" />

            <Skeleton className="bg-custom-secondary h-6 w-6" />

            <Skeleton className="bg-custom-secondary h-8 w-8 rounded-md" />
          </div>

          <Skeleton className="bg-custom-secondary h-8 w-24" />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-4">
          <Skeleton className="bg-custom-secondary h-[clamp(1.25rem,5vw,1.5rem)] w-full" />

          <Skeleton className="bg-custom-secondary h-4 w-full" />
          <Skeleton className="bg-custom-secondary h-4 w-full" />
          <Skeleton className="bg-custom-secondary h-4 w-full" />
          <Skeleton className="bg-custom-secondary h-4 w-full" />

          <Skeleton className="bg-custom-secondary h-4 w-12" />
        </div>

        {/* Specification */}
        <div className="flex flex-col gap-4">
          <Skeleton className="bg-custom-secondary h-[clamp(1.25rem,5vw,1.5rem)] w-full" />

          <ul role="list" className="flex flex-col gap-2">
            {Array.from({ length: 4 }).map(() => (
              <li
                role="listitem"
                key={nanoid(6)}
                className="grid max-w-lg grid-cols-2"
              >
                <Skeleton className="bg-custom-secondary h-4 w-full" />
                <Skeleton className="bg-custom-secondary h-4 w-full" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
