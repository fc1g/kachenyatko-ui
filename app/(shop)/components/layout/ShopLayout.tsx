import { YellowPinkShapes } from '@/components/common';
import { Children } from '@/types/Children';

export function ShopLayout({ children }: Children) {
  return (
    <div className="mt-4 py-[clamp(2rem,3vw,4rem)]">
      <YellowPinkShapes />

      {children}
    </div>
  );
}
