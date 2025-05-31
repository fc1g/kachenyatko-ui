'use server';

import { getApiUrl } from '@/api';
import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/client-integration-nextjs';

export const { query, PreloadQuery } = registerApolloClient(async () => {
  return new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: new HttpLink({
      uri: `${getApiUrl()}/graphql/`,
    }),
  });
});
