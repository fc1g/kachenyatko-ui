'use client';

import { makeClient } from '@/api/core/makeClient';
import { Children } from '@/types';
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support';

export function ApolloWrapper({ children }: Children) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
