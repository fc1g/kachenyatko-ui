import ProductsCard from '@/components/products/ProductsCard';
import getNewestProducts from './action';

export default async function Cards() {
  const newestProducts = await getNewestProducts();

  return (
    <div className="[&>div]:bg-custom-pink mt-8 grid grid-cols-1 justify-items-center gap-12 lg:grid-cols-2">
      {newestProducts.map(product => (
        <ProductsCard key={product.id} data={product} direction="row" />
      ))}
    </div>
  );
}
