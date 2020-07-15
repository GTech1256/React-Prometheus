import { setContext } from '@apollo/client/link/context';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

import { getGithubToken } from '../github';


const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext(async (_, { headers }) => {
  const token = await getGithubToken();

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});