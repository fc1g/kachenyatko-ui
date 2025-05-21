'use client';

import { useProductCategories } from '@/api';
import { CategoryList } from '@/components/features/products';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { useGT } from 'gt-next/client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

export default function ProductsFilteringMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const categories = useProductCategories();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const t = useGT();

  const handleFiltering = useCallback(
    (categoryId: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (params.get('category') === categoryId || categoryId === 'clear') {
        params.set('page', '1');
        params.delete('category');
      } else {
        params.set('page', '1');
        params.set('category', categoryId);
      }

      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams],
  );

  const currentCategory = searchParams.get('category');

  return (
    <aside role="complementary" className="mt-12">
      <div className="relative lg:hidden">
        <Dialog onOpenChange={setIsOpen} open={isOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="flex w-full items-center justify-between"
            >
              <span>{t('Filters')}</span>
              <span>&darr;</span>
            </Button>
          </DialogTrigger>

          <DialogContent aria-describedby="filter-by-category">
            <DialogHeader>
              <DialogTitle>{t('Filter by category')}:</DialogTitle>
              <DialogDescription className="sr-only">
                {t('Filter by category')}
              </DialogDescription>
              <CategoryList
                className="mt-2 w-full lg:hidden"
                categories={categories}
                currentCategory={currentCategory}
                handleFiltering={handleFiltering}
              />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <CategoryList
        className="hidden rounded-xl bg-[#DBF0FF] p-[clamp(0.5rem,2vw,1.5rem)] lg:block lg:w-[clamp(18rem,20vw,24rem)]"
        categories={categories}
        currentCategory={currentCategory}
        handleFiltering={handleFiltering}
      >
        <h3 className="mb-4 text-left text-[clamp(1.25rem,5vw,1.5rem)] font-bold">
          {t('Filter by category')}:
        </h3>
      </CategoryList>
    </aside>
  );
}
