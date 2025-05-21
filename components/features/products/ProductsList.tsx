import { Product } from '@/api/features/products/entities/types';
import { cn } from '@/lib/utils';
import { useGT } from 'gt-next/client';
import ProductsCard from './ProductsCard';

type ProductsListProps = {
  data: Product[];
  direction?: 'row' | 'column';
  className?: string;
  emptyMessage?: string;
};

export default function ProductsList({
  data,
  direction = 'column',
  className = '',
  emptyMessage = 'No products found',
}: ProductsListProps) {
  const t = useGT();

  return (
    <div
      className={cn(
        'mt-12 grid grid-cols-1 justify-items-center gap-4 lg:gap-[clamp(1rem,2vw,2rem)]',
        className,
      )}
    >
      {data.length > 0 ? (
        data.map(product => (
          <ProductsCard key={product.id} data={product} direction={direction} />
        ))
      ) : (
        <div className="flex h-full items-center justify-center">
          <p>{t(emptyMessage)}</p>
        </div>
      )}
    </div>
  );
}
