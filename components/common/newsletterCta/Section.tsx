import { cn } from '@/lib';
import kachenya from '@/public/images/kachenya.png';
import Image from 'next/image';
import { AbsDecor } from '../Decor';
import { Heading } from '../Heading';
import { NewsletterForm } from './Form';

type NewsletterCtaSectionProps = {
  className?: string;
  title?: string;
  decorStyles?: string;
  actionsType?: 'subscribe' | 'update' | 'unsubscribe';
};

export function NewsletterCtaSection({
  decorStyles,
  title = 'Subscribe to the newsletter and receive promo codes and exclusive offers',
  actionsType = 'subscribe',
  className = 'my-12',
}: NewsletterCtaSectionProps) {
  return (
    <section aria-label="CTA section" className="bg-custom-blue relative">
      <div className={cn('p-[clamp(1rem,2vw,3rem)]', className)}>
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-12">
          <Heading as="h3" title={title} className="text-center" />

          <NewsletterForm actionsType={actionsType} />
        </div>
      </div>

      <AbsDecor
        className={cn(
          '-top-10 right-[clamp(0rem,2vw,4.5rem)] z-10 hidden xl:block',
          decorStyles,
        )}
      >
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
