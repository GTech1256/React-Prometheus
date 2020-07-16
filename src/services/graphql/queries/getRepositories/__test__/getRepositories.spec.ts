
import { AllRepositoriesQueryType, getRepositiryQueryString } from '../index';
import { ALL_REPOSITORIES } from '../index';
import { client } from '../../../graphql';

describe('SERVICE: GraphQL - getRepositories', () => {
  it('should return top 10 repositories', async () => {
    const { loading, data } = await client
      .query<AllRepositoriesQueryType>({ query: ALL_REPOSITORIES, variables: { query: getRepositiryQueryString({ }) } })

    expect(loading).toBeFalsy()
    expect(data?.search.edges).toHaveLength(10)
  })
})