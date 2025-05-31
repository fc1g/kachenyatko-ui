import { ClientHeading } from '@/components/common';
import { cn } from '@/lib';
import { useGT } from 'gt-next/client';

type ProductDetailsProps = {
  title: string;
  details: {
    key: string;
    value: string;
  }[];
  className?: string;
};

export function ProductDetails({
  title,
  details,
  className,
}: ProductDetailsProps) {
  const t = useGT();

  return (
    <div className="flex flex-col gap-4">
      <ClientHeading title={title} as="h3" />

      <ul role="list" className="flex flex-col gap-2">
        {details.map(({ key, value }) => (
          <li
            role="listitem"
            key={key}
            className={cn('grid grid-cols-2', className)}
          >
            <span>{t(key)}:</span>
            <span className="font-medium">{t(value)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
