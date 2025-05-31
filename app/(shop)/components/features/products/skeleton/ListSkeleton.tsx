import { cn } from '@/lib/utils';
import { nanoid } from 'nanoid';
import { CardSkeleton } from './CardSkeleton';

type ListSkeleton = {
  numOfCards: number;
  direction?: 'row' | 'column';
  className?: string;
};

export function ListSkeleton({
  numOfCards,
  direction = 'column',
  className = '',
}: ListSkeleton) {
  return (
    <div
      className={cn(
        'mt-12 grid grid-cols-1 justify-items-center gap-4 lg:gap-[clamp(1rem,2vw,2rem)]',
        className,
      )}
    >
      {Array.from({ length: numOfCards }).map(() => (
        <CardSkeleton key={nanoid(6)} direction={direction} />
      ))}
    </div>
  );
}
