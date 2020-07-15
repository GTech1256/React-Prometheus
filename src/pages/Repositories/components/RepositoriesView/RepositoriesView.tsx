import React from 'react';

import RepositoryView from '../RepositoryView';
import { Repository } from '../../types';


type Props = {
  reposetories: Repository[]
}

const RepositoriesView = ({
  reposetories
}: Props) => {
  return (
    <div>
      <div className="list-group">
        {reposetories.map(reposetory => <RepositoryView key={reposetory.node.url} {...reposetory} />)}
      </div>
    </div>
  )
}

export default RepositoriesView;