import { ApolloClient, createHttpLink, InMemoryCache, gql  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

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

// test GraphQL fetch 

type Repositories = {
  search: {
    edges: []
  }
}

export const getRepositories = async () => {
  const res = await client
    .query<Repositories>({
      query: gql`
      query {
        search(type: REPOSITORY, query: "language:javascript stars:>1600", first:10) {
          edges {
            node {
              ... on Repository {
                name
                url
                stargazers {
                  totalCount
                }
                owner{
                  login
                }
              }
            }
          }
        }
      }
      `
    })

    return res.data?.search.edges
}

getRepositories().then(console.log)