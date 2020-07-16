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
import withDebounce from '../../hoc/ChangeDebounce/withDebounce';
import Input from '../../components/Input';


const InputWithDebounce = withDebounce(Input)
const RepositoriesLicenseSelectWithDebounce = withDebounce(RepositoriesLicenseSelect)

const Repositories = () => {
  const [license, setLicense] = useState<string| undefined>(undefined)
  const [name, setName] = useState<string| undefined>(undefined)
  
  const { loading, error, data } = useQuery<AllRepositoriesQueryType>(ALL_REPOSITORIES, {
    variables: { query: getRepositiryQueryString({ license, name }) },
  });

  const handleLicenseSelect = useCallback<SelectProps['onChange']>(setLicense, [])
  const handleNameChange = useCallback<SelectProps['onChange']>(setName, [])

  return (
    <div>
      <RepositoriesLicenseSelectWithDebounce
        value={license}
        onChange={handleLicenseSelect}
        name="repositoriesLicenseSelect"
      />
      <InputWithDebounce
        name={'repositoryName'}
        onChange={handleNameChange}
        placeholder="Введите имя репозитория"
        label="Имя репозитория"
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