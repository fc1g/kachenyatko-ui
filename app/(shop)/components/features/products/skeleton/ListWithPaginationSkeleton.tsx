import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/app/(shop)/components/ui';
import { Skeleton } from '@/components/ui';
import { Children } from '@/types';
import { nanoid } from 'nanoid';

type ListWithPaginationSkeletonProps = Children & {};

export function ListWithPaginationSkeleton({
  children,
}: ListWithPaginationSkeletonProps) {
  return (
    <div className="flex-1">
      {children}

      <Pagination className="my-12">
        <PaginationContent>
          <PaginationItem>
            <Skeleton className="bg-custom-primary h-9 w-[6.25rem]" />
          </PaginationItem>

          {Array.from({ length: 3 }).map(() => (
            <PaginationItem key={nanoid(6)}>
              <Skeleton className="bg-custom-primary h-9 w-9" />
            </PaginationItem>
          ))}

          <PaginationItem>
            <Skeleton className="bg-custom-primary h-9 w-18" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
