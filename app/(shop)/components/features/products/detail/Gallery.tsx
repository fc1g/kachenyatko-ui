'use client';

import { ProductImage } from '@/api/features';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';
import { useGT } from 'gt-next/client';
import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';

type ProductGalleryProps = {
  images: ProductImage[];
};

export function ProductGallery({ images }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const apiRef = useRef<CarouselApi | null>(null);
  const t = useGT();

  const handleApi = useCallback((api: CarouselApi) => {
    apiRef.current = api;

    if (!api) return;

    const updateIndex = () => setCurrentIndex(api.selectedScrollSnap());

    updateIndex();
    api.on('select', updateIndex);
  }, []);

  const handleImageClick = useCallback((index: number) => {
    if (apiRef.current) {
      apiRef.current?.scrollTo(index);
      setCurrentIndex(index);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 px-2 lg:px-0">
      <Carousel setApi={handleApi} opts={{ align: 'start' }}>
        <CarouselContent>
          {images.map(({ id, url, altText }) => (
            <CarouselItem
              key={id}
              className="relative inline-flex h-[clamp(12rem,45vw,36rem)] justify-center"
            >
              <Image
                src={url}
                alt={altText}
                priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-full w-full rounded-md object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-[clamp(.5rem,1vw,1rem)] size-[clamp(1.5rem,2vw,2rem)] cursor-pointer" />
        <CarouselNext className="right-[clamp(.5rem,1vw,1rem)] size-[clamp(1.5rem,2vw,2rem)] cursor-pointer" />
      </Carousel>

      <ul
        role="list"
        className="hidden md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5"
        style={{ gridTemplateColumns: `repeat(minmax(6rem, 1fr), 1fr)` }}
      >
        {images.length > 1 &&
          images.map(({ id, url, altText }, index) => (
            <li key={id} role="listitem">
              <button
                type="button"
                onClick={() => handleImageClick(index)}
                className={`relative block h-24 w-full cursor-pointer transition-all duration-200 focus:outline-none focus-visible:scale-100 focus-visible:opacity-100 ${index === currentIndex ? 'scale-105 opacity-100' : 'scale-95 opacity-75'}`}
                aria-label={`${t('Go to image')} ${index + 1}`}
              >
                <Image
                  src={url}
                  alt={altText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-full w-full rounded-md object-cover"
                  loading="lazy"
                />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
