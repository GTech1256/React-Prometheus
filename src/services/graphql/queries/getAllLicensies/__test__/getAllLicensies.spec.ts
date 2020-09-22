import { ALL_LICENSIES } from '../index';
import { client } from '../../../graphql';
import { LicenseType } from '../types';


describe('SERVICE: GraphQL - getAllLicensies', () => {
  it('should return all licensies', async () => {
    const { loading, data } = await client
    .query<{ licenses: LicenseType }>({
      query: ALL_LICENSIES
    })

    expect(loading).toBeFalsy()
    expect(data?.licenses).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String)
        })
      ])
    )
  })
})