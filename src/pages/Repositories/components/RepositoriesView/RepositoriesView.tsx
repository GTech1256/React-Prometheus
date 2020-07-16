import React from 'react';

import { AllRepositoriesQueryType } from '../../../../services/graphql/queries/getAllRepositories';
import RepositoryView from '../RepositoryView';


type Props = {
  reposetories: AllRepositoriesQueryType['search']['edges']
}

const RepositoriesView = ({
  reposetories
}: Props) => (
  <div>
    <div className="list-group">
      {reposetories.map(({ node: reposetory }) => <RepositoryView key={reposetory.url} {...reposetory} />)}
    </div>
  </div>
)

export default RepositoriesView;