type RepositiryQueryStringOptionsType = {
  license?: string
  name?: string
}

export const MIN_STARS_COUNT = 1600

export const getRepositiryQueryString = ({
  license,
  name,
} : RepositiryQueryStringOptionsType) => `${name ? `${name} in:name` : ''} ${license ? `license:${license}` : ''} language:javascript stars:>${MIN_STARS_COUNT}`