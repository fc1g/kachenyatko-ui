import { Children } from '@/types';
import { AuthLayout } from './components/layout';

export default function layout({ children }: Children) {
  return <AuthLayout>{children}</AuthLayout>;
}
