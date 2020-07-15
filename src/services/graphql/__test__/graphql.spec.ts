import 'cross-fetch/polyfill';

import { getRepositories } from '../index';


describe('SERVICE: GraphQL', () => {
  it('should return 10 repositiries', async () => {
    expect(await getRepositories()).toHaveLength(10);
  })
})