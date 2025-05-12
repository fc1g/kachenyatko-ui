import AbsDecor from './AbsDecor';

export default function YellowPinkShapes() {
  return (
    <>
      <AbsDecor
        ariaLabel="Decorative yellow shape"
        className="bg-custom-yellow top-20 -left-10 h-[clamp(9rem,10vw,11rem)] w-[clamp(4rem,4vw,6rem)]"
      />

      <AbsDecor
        ariaLabel="Decorative pink shape"
        className="bg-custom-pink top-10 right-[clamp(0rem,8vw,7.5rem)] h-[clamp(4rem,4vw,6rem)] w-[clamp(9rem,10vw,11rem)]"
      />
    </>
  );
}
