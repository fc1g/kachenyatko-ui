import { Children } from '@/types/Children';
import { GTProvider } from 'gt-next';

export default function Providers({ children }: Children) {
  return (
    <GTProvider>
      <div className="wrapper">{children}</div>
    </GTProvider>
  );
}
