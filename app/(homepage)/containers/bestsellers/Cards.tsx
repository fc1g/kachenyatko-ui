import ProductsCard from '@/components/products/ProductsCard';
import getBestsellers from './action';

export default async function Cards() {
  const bestsellers = await getBestsellers();

  return (
    <div className="[&>div]:first:bg-custom-yellow [&>div]:even:bg-custom-pink [&>div]:last:bg-custom-blue mt-12 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-3 lg:gap-12">
      {bestsellers.map(product => (
        <ProductsCard key={product.id} data={product} />
      ))}
    </div>
  );
}
