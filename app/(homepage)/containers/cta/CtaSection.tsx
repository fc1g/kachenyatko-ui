import kachenya from '@/public/images/kachenya.png';
import { T } from 'gt-next';
import Image from 'next/image';
import AbsDecor from '../../components/AbsDecor';
import SectionHeading from '../../components/SectionHeading';
import CtaForm from './CtaForm';

export default function CtaSection() {
  return (
    <section aria-label="CTA section" className="bg-custom-blue relative">
      <div className="mt-12 mb-16 px-4 py-4 sm:p-6 lg:p-8 xl:container xl:mx-auto">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-12">
          <SectionHeading title="Reach out to us" className="sr-only" />

          <T>
            <h3 className="text-center text-[clamp(1rem,4vw,1.5rem)] font-bold">
              Subscribe to the newsletter and receive promo codes and exclusive
              offers
            </h3>
          </T>

          <CtaForm />
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
