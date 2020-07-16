import { useQuery } from '@apollo/client';
import React, { useCallback, useState } from 'react';

import { ALL_REPOSITORIES, AllRepositoriesQueryType } from '../../services/graphql/queries/getAllRepositories';
import RepositoriesView from './components/RepositoriesView';
import RepositoriesLicenseSelect from './containers/RepositoriesLicenseSelect';
import { SelectProps } from '../../components/Select';


const Repositories = () => {
  const [license, setLicense] = useState<string| undefined>(undefined)
  const { loading, error, data } = useQuery<AllRepositoriesQueryType>(ALL_REPOSITORIES);

  const handleLicenseSelect = useCallback<SelectProps['onChange']>((event) => {
    setLicense(event.target.value)
  }, [])

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
        !data ?
          <p>Репозиториев по такому фильтру не найдено</p> :
          <RepositoriesView reposetories={data.search.edges} />
      }
    </div>
  )
}

export default Repositories;