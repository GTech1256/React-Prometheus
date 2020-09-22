import { useQuery } from '@apollo/client';
import React, { useCallback, useState } from 'react';

import RepositoriesLicenseSelect from './containers/RepositoriesLicenseSelect';
import RepositoriesView from './components/RepositoriesView';
import {
  AllRepositoriesQueryType,
  getRepositiryQueryString,
  ALL_REPOSITORIES,
  MIN_STARS_COUNT,
} from '../../services/graphql/queries/getRepositories';
import Input, { InputProps } from '../../components/Input';
import { SelectProps } from '../../components/Select';
import Pagination from '../../components/Pagination';
import withDebounce from '../../hoc/withDebounce';


const InputWithDebounce = withDebounce(Input)
const RepositoriesLicenseSelectWithDebounce = withDebounce(RepositoriesLicenseSelect)

const Repositories = () => {
  const [license, setLicense] = useState<string | undefined>(undefined)
  const [name, setName] = useState<string | undefined>(undefined)
  const [beforeCursor, setBeforeCursor] = useState<string | undefined>(undefined)
  const [afterCursor, setAfterCursor] = useState<string | undefined>(undefined)
  
  const { loading, error, data } = useQuery<AllRepositoriesQueryType>(ALL_REPOSITORIES, {
    variables: {
      query: getRepositiryQueryString({license, name }),
      after: afterCursor,
      before: beforeCursor
    },
  });

  const resetPagination = useCallback(() => {
    setBeforeCursor(undefined)
    setAfterCursor(undefined)
  }, [])

  const handleLicenseSelect = useCallback<SelectProps['onChange']>((value) => {
    resetPagination()
    setLicense(value)
  }, [resetPagination])
  const handleNameChange = useCallback<InputProps['onChange']>((value) => {
    resetPagination()
    setName(value)
  }, [resetPagination])
  const handlePaginationNext = useCallback(() => {
    setBeforeCursor('' + data!.search.pageInfo.endCursor)
    setAfterCursor(undefined)
  }, [data])
  const handlePaginationPrev = useCallback(() => {
    setBeforeCursor(undefined)
    setAfterCursor('' + data!.search.pageInfo.startCursor)
  }, [data])

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
      <Pagination
        hasNextPage={data?.search.pageInfo.hasNextPage}
        hasPreviousPage={data?.search.pageInfo.hasPreviousPage}
        onNext={handlePaginationNext}
        onPrev={handlePaginationPrev}
      />
      {
        loading ? <p className="text-center">Загрузка Репозиториев...</p> :
        error ? <p className="text-center">Не удалось загрузить репозиториии</p> :
        data?.search.edges.length === 0 ?
          <p>Репозиториев по такому фильтру не найдено</p> :
          <RepositoriesView reposetories={data!.search.edges} />
      }
    </div>
  )
}

export default Repositories;