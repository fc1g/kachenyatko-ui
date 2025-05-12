import { Product } from '@/api/endpoints/products/types';
import { cn } from '@/lib/utils';
import ProductsCard from './ProductsCard';

type ProductsListProps = {
  data: Product[];
  direction?: 'row' | 'column';
  className?: string;
};

export default function ProductsList({
  data,
  direction = 'column',
  className = '',
}: ProductsListProps) {
  return (
    <div
      className={cn(
        'mt-12 grid grid-cols-1 justify-items-center gap-4 lg:gap-[clamp(1rem,2vw,2rem)]',
        className,
      )}
    >
      {data.map(product => (
        <ProductsCard key={product.id} data={product} direction={direction} />
      ))}
    </div>
  );
}
