import { ProductCategory } from '@/api/features/products/entities/types';
import { Button } from '@/components/ui';
import { useGT } from 'gt-next/client';

type ListOfCategoriesProps = {
  className: string;
  categories: ProductCategory[];
  currentCategory: string | null;
  children?: React.ReactNode;
  handleFiltering: (categoryId: string) => void;
};

export function ListOfCategories({
  className,
  categories,
  currentCategory,
  handleFiltering,
  children,
}: ListOfCategoriesProps) {
  const t = useGT();

  return (
    <div className={className}>
      {children}

      {categories.length === 0 ? (
        <div className="flex h-full items-center justify-center">
          <p>{t('No categories found')}</p>
        </div>
      ) : (
        <>
          <ul
            className="flex flex-col items-start justify-center gap-2"
            role="list"
          >
            {categories.map(category => (
              <li role="listitem" key={category.id} className="w-full">
                <button
                  type="button"
                  className={`focus-visible:bg-custom-primary w-full cursor-pointer rounded-md px-4 py-2 text-left transition duration-300 focus:outline-none focus-visible:text-white ${
                    currentCategory === category.id
                      ? 'bg-custom-primary text-white'
                      : ''
                  }`}
                  onClick={() => handleFiltering(category.id)}
                >
                  <span>{t(category.name)}</span>
                </button>
              </li>
            ))}
          </ul>

          <Button
            variant="ghost"
            className="mt-4 w-full cursor-pointer transition duration-300"
            onClick={() => handleFiltering('clear')}
          >
            {t('Clear')}
          </Button>
        </>
      )}
    </div>
  );
}
