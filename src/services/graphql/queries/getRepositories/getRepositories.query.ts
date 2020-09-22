import { gql } from '@apollo/client';

import { RepositoryType, PageInfoType } from './types';


export type RepositoryResponseType = {
  description: RepositoryType['description']
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
    pageInfo: PageInfoType
    edges: {
      node: RepositoryResponseType
    }[]
  }
}

export const ALL_REPOSITORIES = gql`
  query getRepositories($query: String!, $after: String, $before: String) {
    search(type: REPOSITORY, query: $query, first:10, after:$after, before: $before) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {

        node {
          ... on Repository {
            description
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