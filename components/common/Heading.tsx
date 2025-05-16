import { cn } from '@/lib';
import { T } from 'gt-next';

type HeadingProps = {
  title: string;
  as: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
};

export default function Heading({
  title,
  as: Heading,
  className = '',
}: HeadingProps) {
  let headingStyles: string = '';

  if (Heading === 'h1') {
    headingStyles = 'text-[clamp(1.5rem,5vw,3rem)] leading-tight';
  }
  if (Heading === 'h2') {
    headingStyles = 'text-[clamp(1.5rem,5vw,2rem)]';
  }
  if (Heading === 'h3') {
    headingStyles = 'text-[clamp(1.25rem,5vw,1.5rem)]';
  }
  if (Heading === 'h4') {
    headingStyles = 'text-[clamp(1rem,4vw,1.25rem)]';
  }

  return (
    <T>
      <Heading
        className={cn('text-custom-black font-bold', headingStyles, className)}
      >
        {title}
      </Heading>
    </T>
  );
}
