type RepositiryQueryStringOptionsType = {
  license?: string
  name?: string
}

export const getRepositiryQueryString = ({
  license,
  name
} : RepositiryQueryStringOptionsType) => `${name ? `${name} in:name` : ''} ${license ? `license:${license}` : ''} language:javascript stars:>1600`