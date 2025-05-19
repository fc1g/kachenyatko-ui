'use client';

import { getGraphqlUri } from '@/api';
import { HttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client-integration-nextjs';

export function makeClient() {
  const httpLink = new HttpLink({
    uri: getGraphqlUri(),
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}
