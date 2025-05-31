'use client';

import { ClientHeading } from '@/components/common';
import { TOAST } from '@/components/constants';
import { useGT } from 'gt-next/client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { toast } from 'sonner';

type ProductColorSelectorProps = {
  colors: string[];
};

export function ProductColorSelector({ colors }: ProductColorSelectorProps) {
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
          style: { ...TOAST.SUCCESS },
        },
      );
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, router, t],
  );

  return (
    <div className="my-4 flex items-center gap-6">
      <ClientHeading title="Colors" as="h3" />

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
