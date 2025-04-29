import ProductCard from '@/components/products/ProductCard';
import getBestsellers from './action';

export default async function Cards() {
  const bestsellers = await getBestsellers();

  return (
    <div className="[&>div]:first:bg-custom-yellow [&>div]:even:bg-custom-pink [&>div]:last:bg-custom-blue mt-12 grid grid-cols-1 justify-items-center gap-12 md:grid-cols-3">
      {bestsellers.map(product => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}
