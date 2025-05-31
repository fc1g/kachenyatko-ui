import { cn } from '@/lib';
import { T } from 'gt-next';
import { useGT } from 'gt-next/client';

type HeadingProps = {
  title: string;
  as: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
};

const headingStyles = {
  h1: 'text-[clamp(1.5rem,5vw,3rem)] leading-tight',
  h2: 'text-[clamp(1.5rem,5vw,2rem)]',
  h3: 'text-[clamp(1.25rem,5vw,1.5rem)]',
  h4: 'text-[clamp(1rem,4vw,1.25rem)]',
};

export function Heading({ title, as: Heading, className = '' }: HeadingProps) {
  const styles = Object.prototype.hasOwnProperty.call(headingStyles, Heading)
    ? headingStyles[Heading]
    : '';

  return (
    <T>
      <Heading className={cn('text-custom-black font-bold', styles, className)}>
        {title}
      </Heading>
    </T>
  );
}

export function ClientHeading({
  title,
  as: Heading,
  className = '',
}: HeadingProps) {
  const t = useGT();
  const styles = Object.prototype.hasOwnProperty.call(headingStyles, Heading)
    ? headingStyles[Heading]
    : '';

  return (
    <Heading className={cn('text-custom-black font-bold', styles, className)}>
      {t(title)}
    </Heading>
  );
}
