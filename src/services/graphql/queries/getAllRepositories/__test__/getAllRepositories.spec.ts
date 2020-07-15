
import { Repository } from '../../../../../pages/Repositories/types';
import { ALL_REPOSITORIES } from '../index';
import { client } from '../../../graphql';


describe('SERVICE: GraphQL - getAllRepositories', () => {
  it('should return top 10 repositories', async () => {
    const { loading, data } = await client
    .query<{ search: { edges: Repository[] } }>({
      query: ALL_REPOSITORIES
    })

    expect(loading).toBeFalsy()
    expect(data?.search.edges).toHaveLength(10)
  })
})