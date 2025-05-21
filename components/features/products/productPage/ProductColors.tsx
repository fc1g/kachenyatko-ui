'use client';

import { useGT } from 'gt-next/client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { toast } from 'sonner';

type ProductColorsProps = {
  colors: string[];
};

export default function ProductColors({ colors }: ProductColorsProps) {
  const t = useGT();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleColorClick = useCallback(
    (color: string) => {
      const params = new URLSearchParams(searchParams);
      const currentColor = params.get('color');
      params.set('color', color);
      toast.success(
        t(`Color ${currentColor ? 'changed' : 'selected'} to #${color}`),
        {
          style: {
            backgroundColor: 'var(--color-custom-secondary)',
            color: 'green',
          },
        },
      );
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, router, t],
  );

  return (
    <div className="my-4 flex items-center gap-6">
      <h3 className="text-custom-black text-[clamp(1.25rem,5vw,1.5rem)] font-bold">
        {t('Colors')}:
      </h3>

      <ul role="list" className="flex items-center gap-4">
        {colors.map(color => {
          return (
            <li role="listitem" key={color}>
              <button
                type="button"
                style={{ backgroundColor: color }}
                className={`h-10 w-10 cursor-pointer rounded-full`}
                onClick={() => handleColorClick(color.replace('#', ''))}
              ></button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
