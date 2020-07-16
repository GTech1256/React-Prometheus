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
  query getAllRepositories($query: String!) {
    search(type: REPOSITORY, query: $query, first:10) {
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
            licenseInfo {
              id
            }
          }
        }
      }
    }
  }
`;