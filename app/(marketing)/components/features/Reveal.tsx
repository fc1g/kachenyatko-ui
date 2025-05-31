'use client';

import { Children } from '@/types';
import { useInView } from '../hooks';

type RevealProps = {
  className?: string;
} & Children;

export function Reveal({ children, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px',
  });

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700 ease-out`}
    >
      {children}
    </div>
  );
}
