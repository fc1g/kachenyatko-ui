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

export default function ProductDetails({
  title,
  details,
  className,
}: ProductDetailsProps) {
  const t = useGT();

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-custom-black text-[clamp(1.25rem,5vw,1.5rem)] font-bold">
        {t(title)}
      </h3>

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
