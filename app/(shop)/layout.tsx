import { Children } from '@/types';
import { ShopLayout } from './components/layout';

export default function layout({ children }: Children) {
  return <ShopLayout>{children}</ShopLayout>;
}
