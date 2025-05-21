'use client';

import { useGT } from 'gt-next/client';
import { useCallback, useState } from 'react';

type ProductDescriptionProps = {
  description: string;
};

export default function ProductDescription({
  description,
}: ProductDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useGT();

  const toggleExpanded = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, [setIsExpanded]);

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
