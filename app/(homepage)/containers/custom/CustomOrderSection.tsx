import customOrderImage from '@/public/images/home-hero-top-left.png';
import { T } from 'gt-next';
import Image from 'next/image';
import SectionHeading from '../../components/SectionHeading';

export default function CustomOrderSection() {
  return (
    <section aria-label="Custom Order section">
      <div className="mt-12 px-4 py-4 sm:px-6 lg:px-8 xl:container xl:mx-auto">
        <div className="flex items-center gap-8">
          <figure className="relative hidden h-[clamp(16rem,20vw,24rem)] w-[clamp(16rem,20vw,24rem)] lg:block">
            <Image
              src={customOrderImage}
              alt="Custom Order"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-full w-full object-cover"
            />
          </figure>

          <div>
            <div className="inline-flex items-center gap-4">
              <svg className="h-10 w-10" role="img" aria-hidden={true}>
                <use href="/icons/sprite.svg#dog" />
              </svg>

              <SectionHeading title="Custom Order" align="left" />
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <T>
                <p className="text-lg lg:text-xl">
                  We will manufacture a toy based on your specifications if you
                  order one with a bespoke design. The manufacturing time is
                  determined individually and is contingent upon the intricacy
                  of the work.
                </p>

                <p className="text-lg lg:text-xl">
                  Throughout the entire process, we will stay in close contact
                  with you to make sure every detail is taken into account and
                  the toy is made precisely how you have envisioned it. We will
                  dispatch it as soon as it is prepared.
                </p>
              </T>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
