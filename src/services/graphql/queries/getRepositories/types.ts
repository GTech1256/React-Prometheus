import { LicenseType } from "../getAllLicensies"

/** incomplete description */
type UserType = {
  id: string
  avatarUrl: string
}

export type PageInfoType = {
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
  id: number
  databaseId: number
  description: string
  codeOfConduct: CodeOfConductType
  name: string
  owner: RepositoryOwnerType
  url: string
  stargazers: StargazerConnectionType
  licenseInfo: LicenseType
}
