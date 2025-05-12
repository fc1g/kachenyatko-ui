import { Product } from '@/api/endpoints/products/types';

type ProductsCardProps = {
  data: Product;
  direction?: 'row' | 'column';
};

export default function ProductsCard({
  data,
  direction = 'column',
}: ProductsCardProps) {
  // return (
  //   <Card
  //     className={cn(
  //       'w-full max-w-[25rem]',
  //       direction === 'row'
  //         ? 'sm:max-w-full sm:flex-row sm:gap-0 lg:gap-6'
  //         : 'md:max-w-full',
  //       stock > 0 ? 'opacity-100' : 'opacity-50',
  //     )}
  //   >
  //     <CardHeader
  //       className={`${direction === 'row' ? 'sm:w-96 lg:w-full' : ''}`}
  //     >
  //       <Link
  //         href={`/products/${slug}/${id}`}
  //         className="group focus:outline-none"
  //       >
  //         <figure className="relative h-44 w-full md:h-[clamp(10rem,15vw,16rem)]">
  //           <Image
  //             src={images && images[0].url}
  //             alt={images && images[0].altText}
  //             fill
  //             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  //             priority
  //             className="h-full w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105"
  //           />
  //         </figure>
  //       </Link>
  //     </CardHeader>

  //     <CardContent>
  //       <div className="mb-4 flex flex-col gap-2">
  //         <Heading as="h4" title={name} />

  //         <T>
  //           <p className="text-[clamp(.875rem,2vw,1rem)]">{briefInfo}</p>
  //         </T>
  //       </div>
  //       {stock > 0 ? (
  //         <div>
  //           {discount > 0 ? (
  //             <div className="flex items-center gap-2">
  //               <span className="text-custom-black text-2xl font-bold">
  //                 {formatPrice(price - (discount ?? 0))}
  //               </span>
  //               <span className="line-through">{formatPrice(price)}</span>
  //             </div>
  //           ) : (
  //             <span className="text-custom-black text-2xl font-bold">
  //               {formatPrice(price)}
  //             </span>
  //           )}
  //         </div>
  //       ) : (
  //         <T>
  //           <span className="text-custom-black text-2xl font-bold">
  //             Out of stock
  //           </span>
  //         </T>
  //       )}
  //     </CardContent>
  //   </Card>
  // );

  return (
    <div className={`${direction === 'row' ? 'flex' : ''}`}>{data.name}</div>
  );
}
