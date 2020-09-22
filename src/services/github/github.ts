export async function getGithubToken(): Promise<string> {
  const token = process.env.REACT_APP_GITHUB_ACCESS_TOKEN
  
  if (!token) {
    throw new Error('REACT_APP_GITHUB_ACCESS_TOKEN not provide on .env')
  }

  return token
}