import { Toaster } from '@/components/ui';
import { Children } from '@/types';
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
