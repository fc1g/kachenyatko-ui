import { T } from 'gt-next';

type SectionHeadingProps = {
  title: string;
  className?: string;
};

export default function SectionHeading({
  title,
  className = '',
}: SectionHeadingProps) {
  return (
    <T>
      <h2 className={`${className} text-[clamp(1.5rem,5vw,2.7rem)] font-bold`}>
        {title}
      </h2>
    </T>
  );
}
