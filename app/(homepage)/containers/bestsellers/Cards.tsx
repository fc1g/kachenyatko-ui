import ProductsList from '@/components/features/products/ProductsList';

export default async function Cards() {
  return (
    <ProductsList
      data={[]}
      className="[&>div:nth-child(1)]:bg-custom-yellow [&>div:nth-child(2)]:bg-custom-pink [&>div:nth-child(3)]:bg-custom-blue md:grid-cols-3"
    />
  );
}
