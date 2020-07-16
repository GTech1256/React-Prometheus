type LicenseRuleType = {
  description: string
  key: string
  label: string
}

export type LicenseType = {
  body: string
  conditions: LicenseRuleType
  description: string
  featured: boolean
  hidden: boolean
  id: string
  implementation: string
  key: string
  limitations: LicenseRuleType
  name: string
  nickname: string
  permissions: LicenseRuleType
  pseudoLicense: boolean
  spdxId: string
  url: string
}
