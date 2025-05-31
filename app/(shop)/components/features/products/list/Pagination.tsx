'use client';

import { PRODUCTS_PAGINATION } from '@/api/features';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/app/(shop)/components/ui';
import { cn } from '@/lib';
import { useGT } from 'gt-next/client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

type ProductsPaginationProps = {
  total: number;
};

export function ProductsPagination({ total }: ProductsPaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const t = useGT();

  const currPage = Number(searchParams.get('page')) || PRODUCTS_PAGINATION.PAGE;
  const limit = Number(searchParams.get('limit')) || PRODUCTS_PAGINATION.LIMIT;
  const maxPage = Math.ceil(total / limit);

  const buildLink = useCallback(
    (newPage: number) => {
      const params = new URLSearchParams(searchParams);
      params.set('page', newPage.toString());

      return `${pathname}?${params.toString()}`;
    },
    [pathname, searchParams],
  );

  const [first, second, third] = useCallback(() => {
    if (currPage === 1) return [currPage, currPage + 1, currPage + 2];
    if (currPage === maxPage) return [currPage - 2, currPage - 1, currPage];
    return [currPage - 1, currPage, currPage + 1];
  }, [currPage, maxPage])();

  return (
    <Pagination className="my-12">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            label={t('Previous')}
            className={`cursor-pointer ${currPage === 1 && 'pointer-events-none opacity-50'}`}
            href={buildLink(currPage - 1)}
          ></PaginationPrevious>
        </PaginationItem>

        {currPage > 2 && maxPage > PRODUCTS_PAGINATION.NAV_LIMIT && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {[first, second, third].map(page => {
          if (page && maxPage >= page)
            return (
              <PaginationItem key={`Page-${page}`}>
                <PaginationLink
                  href={buildLink(page)}
                  className={cn(
                    'hover:bg-custom-primary hover:text-white',
                    page === currPage ? 'bg-custom-primary text-white' : '',
                  )}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          else return '';
        })}

        {currPage < maxPage - 1 && maxPage > PRODUCTS_PAGINATION.NAV_LIMIT && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            label={t('Next')}
            className={`cursor-pointer ${currPage === maxPage && 'pointer-events-none opacity-50'}`}
            href={buildLink(currPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
