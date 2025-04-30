import { T } from 'gt-next';

type SectionHeadingProps = {
  title: string;
  align?: 'center' | 'left' | 'right';
};

export default function SectionHeading({
  title,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <T>
      <h2 className={`text-${align} text-[clamp(1.5rem,6vw,2.5rem)] font-bold`}>
        {title}
      </h2>
    </T>
  );
}
