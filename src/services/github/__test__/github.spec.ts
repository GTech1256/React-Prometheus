import { getGithubToken } from "../github"

describe('SERVICE: GitHub', () => {
  it('should return GitHub access token', async () => {
    expect(typeof await getGithubToken()).toBe('string');
  })
})