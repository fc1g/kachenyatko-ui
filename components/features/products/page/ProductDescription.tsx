'use client';

import { useProductStore } from '@/components/features/products';
import { useGT } from 'gt-next/client';

type ProductDescriptionProps = {
  description: string;
};

export default function ProductDescription({
  description,
}: ProductDescriptionProps) {
  const t = useGT();
  const isExpanded = useProductStore(store => store.isExpanded);
  const toggleExpanded = useProductStore(store => store.toggleExpanded);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-custom-black text-[clamp(1.25rem,5vw,1.5rem)] font-bold">
        {t('Description')}
      </h3>

      <p className="text-custom-black">
        {t(isExpanded ? description : description.slice(0, 120))}
      </p>

      {description.length > 120 && (
        <button
          type="button"
          className="text-custom-blue w-fit cursor-pointer text-sm font-medium underline transition-transform duration-300 focus:outline-none focus-visible:scale-110"
          onClick={toggleExpanded}
        >
          {isExpanded ? t('More') : t('Less')}
        </button>
      )}
    </div>
  );
}
