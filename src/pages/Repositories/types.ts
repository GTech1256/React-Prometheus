export type Repository = {
  node: {
    name: string
    owner: {
      login: string
    }
    url: string
    stargazers: { totalCount: number }
  }
  __typename: "SearchResultItemEdge"
}