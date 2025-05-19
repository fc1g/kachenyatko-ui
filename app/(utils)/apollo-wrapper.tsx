'use client';

import { makeClient } from '@/api';
import { Children } from '@/types';
import { ApolloNextAppProvider } from '@apollo/client-integration-nextjs';

export function ApolloWrapper({ children }: Children) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
