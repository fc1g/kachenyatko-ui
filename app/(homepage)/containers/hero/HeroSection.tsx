import { Button } from '@/components/ui/button';
import { T } from 'gt-next';
import Link from 'next/link';
import HeroDecor from './HeroDecor';

export default function HeroSection() {
  return (
    <section
      className="relative h-[80vh] w-full px-4 sm:h-[90vh] sm:px-6 lg:px-8"
      aria-label="Hero section"
    >
      <T>
        <div className="flex h-full flex-col items-start justify-center gap-4 sm:px-[clamp(2rem,2vw,4rem)] lg:container lg:mx-auto">
          <h1 className="text-custom-black max-w-[clamp(18rem,60vw,36rem)] text-[clamp(1.5rem,5vw,3rem)] leading-tight font-bold">
            The softest toys for the most tender cuddles
          </h1>

          <p className="text-custom-black max-w-[clamp(18rem,65vw,26rem)] text-[clamp(0.875rem,3vw,1.25rem)]">
            Hypoallergenic, pleasant to touch and safe for children.
          </p>

          <Button
            variant="default"
            size="lg"
            className="cursor-pointer rounded-[3px]"
            asChild
            aria-label="Shop our products"
          >
            <Link href="/products">Shop now</Link>
          </Button>
        </div>
      </T>

      <HeroDecor />
    </section>
  );
}
