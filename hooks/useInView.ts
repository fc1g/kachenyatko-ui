'use client';

import { useEffect, useRef, useState } from 'react';

export function useInView<T extends HTMLElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    if (ref.current) observer.observe(ref.current);
    if (ref.current && inView) {
      observer.unobserve(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}
