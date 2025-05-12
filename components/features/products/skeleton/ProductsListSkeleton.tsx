import { cn } from '@/lib/utils';
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
    <div
      className={cn(
        'mt-12 grid grid-cols-1 justify-items-center gap-4 lg:gap-[clamp(1rem,2vw,2rem)]',
        className,
      )}
    >
      {Array.from({ length: numOfCards }).map((_, i) => (
        <ProductCardSkeleton key={i} direction={direction} />
      ))}
    </div>
  );
}
