import { Heading } from '@/components/common';
import BerryHugger from '@/public/images/berry-hugger.png';
import { T } from 'gt-next';
import Image from 'next/image';

export default function CustomOrderSection() {
  return (
    <section aria-label="Custom Order section">
      <div className="mt-12 p-[clamp(1rem,2vw,3rem)]">
        <div className="flex items-center gap-8">
          <figure className="relative hidden h-[clamp(16rem,20vw,24rem)] w-[clamp(16rem,20vw,24rem)] xl:block">
            <Image
              src={BerryHugger}
              alt="A soft crocheted dinosaur plush toy wearing blue shorts, with sleepy embroidered eyes and a gentle smile, hugging a small red strawberry plush with green leaves. The dinosaur has a brown crest and a silver ring on its arm."
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-full w-full object-cover"
            />
          </figure>

          <div>
            <div className="inline-flex items-center gap-4">
              <svg className="size-10" role="img" aria-hidden={true}>
                <use href="/icons/sprite.svg#dog" />
              </svg>

              <Heading as="h2" title="Custom Order" className="text-left" />
            </div>

            <div className="mt-6 flex max-w-6xl flex-col gap-4">
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
                  dispatch it as soon as it is prepared.
                </p>
              </T>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
