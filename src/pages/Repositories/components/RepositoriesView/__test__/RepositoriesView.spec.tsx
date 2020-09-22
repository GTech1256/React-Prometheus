import React from 'react';
import renderer from 'react-test-renderer';

import RepositoriesView from '../RepositoriesView';
import { RepositoryResponseType } from '../../../../../services/graphql/queries/getRepositories';


const reposetory: { node: RepositoryResponseType } = {
  node: {
    name: 'name',
    owner: {
      login: 'login'
    },
    url: 'url',
    stargazers: { totalCount: 999 },
    description: 'description'
  }
};

describe('<RepositoriesView />', () => {
  it('should render correct', () => {
    const props = {
      reposetories: [
        reposetory
      ]
    };

    const tree = renderer
      .create(<RepositoriesView {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  })
})