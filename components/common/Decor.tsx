type AbsDecorProps = {
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
};

export function AbsDecor({
  className = '',
  children,
  ariaLabel = 'decorative element',
}: AbsDecorProps) {
  return (
    <div
      role="presentation"
      aria-label={ariaLabel}
      className={`${className} absolute -z-10 rounded-3xl`}
    >
      {children}
    </div>
  );
}

export function YellowPinkShapes() {
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

export function YellowGreenShapes() {
  return (
    <>
      <AbsDecor
        ariaLabel="Decorative yellow shape"
        className="bg-custom-yellow top-20 -left-10 h-[clamp(9rem,10vw,11rem)] w-[clamp(4rem,4vw,6rem)]"
      />

      <AbsDecor
        ariaLabel="Decorative green shape"
        className="bg-custom-[#94A43A] top-10 right-[clamp(0rem,8vw,7.5rem)] h-[clamp(4rem,4vw,6rem)] w-[clamp(9rem,10vw,11rem)]"
      />
    </>
  );
}
