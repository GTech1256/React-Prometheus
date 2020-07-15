import { gql } from '@apollo/client';

import { Repository } from '../../../../pages/Repositories/types';



export type Query = {
  search: {
    edges: Repository[]
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
            owner{
              login
            }
          }
        }
      }
    }
  }
`;