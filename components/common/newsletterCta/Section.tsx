import kachenya from '@/public/images/kachenya.png';
import Image from 'next/image';
import { AbsDecor } from '../Decor';
import { Heading } from '../Heading';
import { NewsletterForm } from './Form';

export function NewsletterCtaSection() {
  return (
    <section aria-label="CTA section" className="bg-custom-blue relative">
      <div className="my-12 p-[clamp(1rem,2vw,3rem)]">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-12">
          <Heading
            as="h3"
            title="Subscribe to the newsletter and receive promo codes and exclusive offers"
            className="text-center"
          />

          <NewsletterForm />
        </div>
      </div>

      <AbsDecor className="-top-10 right-[clamp(0rem,2vw,4.5rem)] z-10 hidden xl:block">
        <Image
          src={kachenya}
          alt="A soft crocheted yellow duck plush toy with small black button eyes, an orange beak, tiny wings, and orange feet, designed in a round and chubby shape."
          priority
          width={300}
          height={300}
        />
      </AbsDecor>
    </section>
  );
}
