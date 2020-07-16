import { gql } from '@apollo/client';

import { RepositoryType } from './types';


export type RepositoryResponseType = {
  name: RepositoryType['name']
  url: RepositoryType['url']
  stargazers: {
    totalCount: RepositoryType['stargazers']['totalCount']
  }
  owner: {
    login: RepositoryType['owner']['login']
  }
}

export type QueryType = {
  search: {
    edges: {
      node: RepositoryResponseType
    }[]
  }
}

export const ALL_REPOSITORIES = gql`
  query getAllRepositories {
    search(type: REPOSITORY, query: "language:javascript stars:>1600", first:10) {
      edges {
        node {
          ... on Repository {
            name
            url
            stargazers {
              totalCount
            }
            owner {
              login
            }
          }
        }
      }
    }
  }
`;