/** incomplete description */
type UserType = {
  id: string
  avatarUrl: string
}

type PageInfoType = {
  endCursor: string
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string
}

type StargazerConnectionType = {
  nodes: UserType[]
  pageInfo: PageInfoType
  totalCount: number
}

type RepositoryOwnerType = {
  id: string
  login: string
  repository?: RepositoryType
  resourcePath: string
  url: string
}

type CodeOfConductType = {
  body?: string
  id: string
  key: string
  name: string
  resourcePath: string
  url: string
}

/** incomplete description */
export type RepositoryType = {
  codeOfConduct: CodeOfConductType
  name: string
  owner: RepositoryOwnerType
  url: string
  stargazers: StargazerConnectionType
}
