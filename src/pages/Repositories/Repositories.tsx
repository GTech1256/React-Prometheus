import { useQuery } from '@apollo/client';
import React, { useCallback, useState } from 'react';

import RepositoriesLicenseSelect from './containers/RepositoriesLicenseSelect';
import RepositoriesView from './components/RepositoriesView';
import {
  AllRepositoriesQueryType,
  getRepositiryQueryString,
  ALL_REPOSITORIES,
  MIN_STARS_COUNT,
} from '../../services/graphql/queries/getAllRepositories';
import { SelectProps } from '../../components/Select';
import withDebounce from '../../hoc/withDebounce';
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
      <div className="alert alert-primary" role="alert">
        Репозитории с менее чем {MIN_STARS_COUNT} звезд не будут найдены из-за &nbsp;
        <a
          href="https://docs.github.com/en/github/searching-for-information-on-github/troubleshooting-search-queries#potential-timeouts"
          target="_blank"
          rel="noopener noreferrer"
        >ограничений GitHub</a>
      </div>
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