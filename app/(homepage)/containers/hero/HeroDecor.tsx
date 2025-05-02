import AbsDecor from '@/app/(homepage)/components/AbsDecor';
import BerryHugger from '@/public/images/berry-hugger.png';
import DinoDreamy from '@/public/images/dino-dreamy.png';
import RainbowDino from '@/public/images/rainbow-dino.png';
import Image from 'next/image';

export default function HeroDecor() {
  return (
    <div aria-hidden="true">
      <AbsDecor
        className="bg-custom-yellow -top-5 left-[clamp(10%,25vw,30%)] h-[clamp(3rem,3vw,4.5rem)] w-32"
        ariaLabel="Decorative yellow shape"
      />

      <AbsDecor
        className="bg-custom-blue -bottom-10 -left-5 h-44 w-[clamp(4rem,6vw,7rem)]"
        ariaLabel="Decorative blue shape"
      />

      <AbsDecor
        className="bg-custom-pink top-[clamp(1rem,5rem-4vw,5rem)] right-[clamp(-7.5rem,-7.5rem+10vw,2.5rem)] h-[clamp(11rem,35vw,44rem)] w-[clamp(11rem,25vw,32rem)] -rotate-[25deg] md:-rotate-[15deg]"
        ariaLabel="Decorative pink shape"
      />

      <AbsDecor
        ariaLabel="Decorative plush toy in the top left corner"
        className="top-0 -left-15 landscape:-top-10 landscape:-left-20"
      >
        <Image
          src={BerryHugger}
          alt="A soft crocheted dinosaur plush toy wearing blue shorts, with sleepy embroidered eyes and a gentle smile, hugging a small red strawberry plush with green leaves. The dinosaur has a brown crest and a silver ring on its arm."
          width={300}
          height={300}
          priority
          className="h-auto w-auto max-w-[clamp(7.5rem,25vw,13.75rem)] rotate-[35deg] sm:rotate-[25deg] landscape:max-w-[clamp(11rem,20vw,13.75rem)]"
        />
      </AbsDecor>

      <AbsDecor
        ariaLabel="Decorative plush toy in the top right corner"
        className="hidden md:top-0 md:-right-25 md:block"
      >
        <Image
          src={DinoDreamy}
          alt="A small, soft crocheted green plush toy with sleepy embroidered eyes and a tiny smile, featuring a red strawberry with yellow seeds on top of its head."
          width={800}
          height={800}
          priority
          className="h-full w-full -rotate-[15deg] object-contain md:max-w-[clamp(26rem,45vw,50rem)]"
        />
      </AbsDecor>

      <AbsDecor
        ariaLabel="Decorative plush toy in the bottom left corner"
        className="hidden md:-bottom-10 md:-left-5 md:block landscape:md:-bottom-10 landscape:md:left-0"
      >
        <Image
          src={RainbowDino}
          alt="A cute crocheted dinosaur plush toy with a green body, rainbow-colored spikes on its back, pink cheeks, black button eyes, a cream belly, and a friendly smile."
          width={300}
          height={300}
          priority
          className="h-full w-full max-w-[clamp(10rem,20vw,13.75rem)] rotate-[15deg] object-contain landscape:max-w-[clamp(4rem,12vw,13.75rem)]"
        />
      </AbsDecor>
    </div>
  );
}
