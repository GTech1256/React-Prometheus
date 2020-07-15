import React from 'react';
import renderer from 'react-test-renderer';

import RepositoriesView from '../RepositoriesView';

const reposetory = {
  node: {
    name: 'name',
    owner: {
      login: 'login'
    },
    url: 'url',
    stargazers: { totalCount: 999 }
  },
  __typename: 'SearchResultItemEdge' as 'SearchResultItemEdge'
};

describe('<Repositories />', () => {
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