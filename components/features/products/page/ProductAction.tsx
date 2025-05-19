'use client';

import { useProductStore } from '@/components/features/products';
import { Button } from '@/components/ui';
import { useGT } from 'gt-next/client';

type ProductActionProps = {
  stock: number;
};

export default function ProductAction({ stock }: ProductActionProps) {
  const t = useGT();
  const quantity = useProductStore(store => store.quantity);
  const inc = useProductStore(store => store.inc);
  const dec = useProductStore(store => store.dec);

  // TODO: Add server action to add product to cart

  return (
    <div className="my-2 flex items-center gap-6">
      {stock > 0 ? (
        <div className="flex items-center gap-6">
          <Button
            variant="outline"
            size="icon"
            className="cursor-pointer"
            disabled={quantity === 1}
            onClick={dec}
          >
            <svg className="h-6 w-6" aria-hidden="true">
              <use href="/icons/sprite.svg#minus" />
            </svg>
          </Button>

          <span className="text-custom-black w-3 font-medium">{quantity}</span>

          <Button
            variant="outline"
            size="icon"
            className="cursor-pointer"
            disabled={quantity === stock}
            onClick={inc}
          >
            <svg className="h-6 w-6" aria-hidden="true">
              <use href="/icons/sprite.svg#plus" />
            </svg>
          </Button>
        </div>
      ) : (
        <span className="text-custom-black text-lg font-bold">
          {t('Out of stock')}
        </span>
      )}

      <Button
        className="max-w-max cursor-pointer"
        variant="default"
        disabled={!stock}
      >
        <svg className="h-6 w-6" aria-hidden="true">
          <use href="/icons/sprite.svg#shopping-cart" />
        </svg>
        {t('Buy now')}
      </Button>
    </div>
  );
}
