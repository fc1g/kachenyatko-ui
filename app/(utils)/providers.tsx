import { Toaster } from '@/components/ui/sonner';
import { Children } from '@/types/Children';
import { GTProvider } from 'gt-next';
import { ApolloWrapper } from './apollo-wrapper';

export default function Providers({ children }: Children) {
  return (
    <GTProvider>
      <ApolloWrapper>
        <div className="wrapper">{children}</div>
      </ApolloWrapper>
      <Toaster />
    </GTProvider>
  );
}
