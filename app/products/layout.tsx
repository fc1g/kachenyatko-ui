import YellowPinkShapes from '@/components/common/decor/YellowPinkShapes';
import { Children } from '@/types/Children';

export default function ProductsLayout({ children }: Children) {
  return (
    <div className="py-[clamp(2rem,3vw,3rem)]">
      <YellowPinkShapes />

      {children}
    </div>
  );
}
