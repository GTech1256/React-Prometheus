import React from 'react';
import renderer from 'react-test-renderer';

import RepositoryView from '../RepositoryView';
import { Repository } from '../../../types';


describe('<Repositories />', () => {
  it('should render correct', () => {
    const props: Repository = {
      node: {
        name: 'name',
        owner: {
          login: 'login'
        },
        url: 'url',
        stargazers: { totalCount: 999 }
      },
      __typename: 'SearchResultItemEdge'
    };

    const tree = renderer
      .create(<RepositoryView {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  })
})