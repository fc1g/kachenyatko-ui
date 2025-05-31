import { Skeleton } from '@/components/ui';
import { nanoid } from 'nanoid';

export function ProductsFilteringMenuSkeleton() {
  return (
    <aside
      role="complementary"
      className="mt-12 h-max w-full rounded-md bg-[#DBF0FF] lg:w-[clamp(18rem,20vw,24rem)]"
    >
      <div className="lg:hidden">
        <Skeleton className="h-9 w-full" />
      </div>

      <div className="hidden lg:block">
        <Skeleton className="mb-4 h-[clamp(1.25rem,5vw,1.5rem)] w-52" />

        <ul
          className="flex flex-col items-start justify-center gap-2"
          role="list"
        >
          {Array.from({ length: 3 }).map(() => (
            <li role="listitem" key={nanoid(6)} className="w-full">
              <Skeleton className="h-10 w-full rounded-md px-4 py-2" />
            </li>
          ))}
        </ul>

        <Skeleton className="mt-4 h-9 w-full" />
      </div>
    </aside>
  );
}
