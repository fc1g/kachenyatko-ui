import ProductsList from '@/components/features/products/ProductsList';

export default async function Cards() {
  return (
    <ProductsList
      data={[]}
      direction="row"
      className="[&>div]:bg-custom-pink lg:grid-cols-2"
    />
  );
}
