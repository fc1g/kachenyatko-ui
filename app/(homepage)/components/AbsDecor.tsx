type AbsDecorProps = {
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
};

export default function AbsDecor({
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
