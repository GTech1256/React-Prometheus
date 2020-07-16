import { gql } from '@apollo/client';

import { LicenseType } from './types';



export type QueryType = {
  licenses: ({ __typename: "License" } & Pick<LicenseType, 'name'>)[]
}

export const ALL_LICENSIES = gql`
  query getAllLicensies {
    licenses {
      name
    }
  }
`;