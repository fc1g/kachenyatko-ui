import { Product } from '@/api/features';
import { Card, CardContent, CardHeader } from '@/app/(shop)/components/ui';
import { cn } from '@/lib/utils';
import { useGT } from 'gt-next/client';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { ProductPrice } from '../shared';

type ProductsCardProps = {
  data: Product;
  direction?: 'row' | 'column';
};

export function ProductsCard({
  data: {
    id,
    name,
    slug,
    shortDescription,
    formattedPrice,
    formattedOldPrice,
    stock,
    images,
  },
  direction = 'column',
}: ProductsCardProps) {
  const t = useGT();
  const image = useMemo(() => {
    return images.find(image => image.position === 1);
  }, [images]);

  return (
    <Card
      className={cn(
        'w-full max-w-[25rem]',
        direction === 'row'
          ? 'sm:max-w-full sm:flex-row sm:gap-0 lg:gap-6'
          : 'md:max-w-full',
        stock > 0 ? 'opacity-100' : 'opacity-50',
      )}
    >
      <CardHeader className={`${direction === 'row' ? 'sm:w-96' : ''}`}>
        <Link
          href={`/products/${slug}/${id}`}
          className="group focus:outline-none"
        >
          <figure className="relative h-44 w-full md:h-[clamp(10rem,15vw,16rem)]">
            <Image
              src={image ? image.url : ''}
              alt={image ? image.altText : ''}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="h-full w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105"
            />
          </figure>
        </Link>
      </CardHeader>

      <CardContent>
        <div className="mb-4 flex flex-col gap-2">
          <h4 className="text-custom-black text-[clamp(1rem,4vw,1.25rem)] font-bold">
            {t(name)}
          </h4>

          <p className="text-[clamp(.875rem,2vw,1rem)]">
            {t(shortDescription)}
          </p>
        </div>

        {stock > 0 ? (
          <ProductPrice
            formattedPrice={formattedPrice}
            formattedOldPrice={formattedOldPrice}
            fontSize="sm"
          />
        ) : (
          <span className="text-custom-black text-2xl font-bold">
            {t('outOfStock')}
          </span>
        )}
      </CardContent>
    </Card>
  );
}
