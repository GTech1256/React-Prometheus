import React, { useMemo } from 'react';

import { ALL_LICENSIES, getAllLicensiesQueryType } from '../../../../services/graphql/queries/getAllLicensies';
import Select, { SelectProps } from '../../../../components/Select';
import { useQuery } from '@apollo/client';


type Props = Pick<SelectProps, 'className' | 'name' | 'onChange' | 'value'>

const RepositoriesLicenseSelect = (props: Props) => {
  const { loading, error, data } = useQuery<getAllLicensiesQueryType>(ALL_LICENSIES);

  const options = useMemo<SelectProps['options']>(
    () => !data ? 
      [] :
      data?.licenses.map(license => ({ label: license.name, value: license.key })),
    [data]
    )

  if (error) return <p>Не удалось получить лицении</p>

  return <Select
    title="Лицензия"
    {...props}
    isLoading={loading}
    options={options}
  />
}

export default RepositoriesLicenseSelect;