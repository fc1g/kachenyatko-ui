import {
  Pagination,
  PaginationContent,
  PaginationItem,
  Skeleton,
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { nanoid } from 'nanoid';
import ProductCardSkeleton from './ProductsCardSkeleton';

type ProductsListSkeleton = {
  numOfCards: number;
  direction?: 'row' | 'column';
  className?: string;
};

export default function ProductsListSkeleton({
  numOfCards,
  direction = 'column',
  className = '',
}: ProductsListSkeleton) {
  return (
    <div className="flex-1">
      <div
        className={cn(
          'mt-12 grid grid-cols-1 justify-items-center gap-4 lg:gap-[clamp(1rem,2vw,2rem)]',
          className,
        )}
      >
        {Array.from({ length: numOfCards }).map(() => (
          <ProductCardSkeleton key={nanoid(6)} direction={direction} />
        ))}
      </div>

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
