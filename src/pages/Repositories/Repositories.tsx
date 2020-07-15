import { useQuery } from '@apollo/client';
import React from 'react';

import { ALL_REPOSITORIES, Query } from '../../services/graphql/queries/getAllRepositories';
import RepositoriesView from './components/RepositoriesView';


const Repositories = () => {
  const { loading, error, data } = useQuery<Query>(ALL_REPOSITORIES);

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error</p>

  console.log({ data });
  

  return (
    <div>
      {!data ? <p>no Data </p> : <RepositoriesView reposetories={data.search.edges} />}
    </div>
  )
}

export default Repositories;