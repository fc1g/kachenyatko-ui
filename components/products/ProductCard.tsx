import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Product } from './types/Product';
import { formatPrice } from './utils/formatPrice';

type ProductCardProps = {
  data: Product;
};

export default function ProductCard({
  data: { id, image, imageAlt, name, description, price, discount, totalPrice },
}: ProductCardProps) {
  return (
    <Card className="w-full max-w-[25rem] md:max-w-full">
      <CardHeader>
        <Link href={`/products/${id}`}>
          <figure className="relative h-44 w-full md:h-[clamp(10rem,15vw,16rem)]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="h-full w-full rounded-md object-cover"
            />
          </figure>
        </Link>
      </CardHeader>

      <CardContent>
        <div className="mb-4 flex flex-col gap-2">
          <h4 className="text-xl font-bold md:text-lg lg:text-xl">{name}</h4>

          <p className="text-base md:text-sm lg:text-base">{description}</p>
        </div>
        <div>
          {discount ? (
            <div className="flex items-center gap-2">
              <span className="text-custom-black text-2xl font-bold">
                {formatPrice(totalPrice)}
              </span>
              <span className="line-through">{formatPrice(price)}</span>
            </div>
          ) : (
            <span className="text-custom-black text-2xl font-bold">
              {formatPrice(price)}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
