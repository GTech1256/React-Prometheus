import { useQuery } from '@apollo/client';
import React, { useCallback, useState } from 'react';

import RepositoriesLicenseSelect from './containers/RepositoriesLicenseSelect';
import RepositoriesView from './components/RepositoriesView';
import {
  AllRepositoriesQueryType,
  getRepositiryQueryString,
  ALL_REPOSITORIES,
} from '../../services/graphql/queries/getAllRepositories';
import { SelectProps } from '../../components/Select';


const Repositories = () => {
  const [license, setLicense] = useState<string| undefined>(undefined)
  
  const { loading, error, data } = useQuery<AllRepositoriesQueryType>(ALL_REPOSITORIES, {
    variables: { query: getRepositiryQueryString(license) },
  });

  const handleLicenseSelect = useCallback<SelectProps['onChange']>(setLicense, [])

  return (
    <div>
      <RepositoriesLicenseSelect
        value={license}
        onChange={handleLicenseSelect}
        name="repositoriesLicenseSelect"
      />
      {
        loading ? <p>Загрузка Репозиториев...</p> :
        error ? <p>Не удалось загрузить репозиториии</p> :
        data?.search.edges.length === 0 ?
          <p>Репозиториев по такому фильтру не найдено</p> :
          <RepositoriesView reposetories={data!.search.edges} />
      }
    </div>
  )
}

export default Repositories;