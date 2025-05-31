'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui';
import { Children } from '@/types';
import { useGT } from 'gt-next/client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { LIMITS } from './Limits';

type ProductsLimitingAndSortingMenuProps = Children & {};

type MenuType = 'sort' | 'limit';

export function ProductsLimitingAndSortingMenu({
  children,
}: ProductsLimitingAndSortingMenuProps) {
  const t = useGT();

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const sort = searchParams.get('sort') || 'asc';

  const handleFiltering = useCallback(
    (type: MenuType, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (params.get(type) === value) {
        params.delete(type);
      } else {
        params.set(type, value);
      }

      params.set('page', '1');
      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams],
  );

  return (
    <div className="flex items-center justify-between">
      {children}

      <div className="flex items-center justify-center gap-6">
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <svg className="h-6 w-6" aria-hidden="true">
              <use href="/icons/sprite.svg#limit" />
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{t('Items per page')}</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {LIMITS.map(limit => (
              <DropdownMenuItem
                key={`Limit-${limit}`}
                onClick={() => handleFiltering('limit', limit.toString())}
                className="focus-visible:bg-custom-secondary cursor-pointer"
              >
                {limit} {t('toys')}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <button
          aria-label={`${t('Sort')} ${sort === 'asc' ? t('descending') : t('ascending')}`}
          type="button"
          onClick={() =>
            handleFiltering('sort', sort === 'asc' ? 'desc' : 'asc')
          }
          className="cursor-pointer"
        >
          <svg className="h-6 w-6" aria-hidden="true">
            <use href={`/icons/sprite.svg#sort-${sort}`} />
          </svg>
        </button>
      </div>
    </div>
  );
}
