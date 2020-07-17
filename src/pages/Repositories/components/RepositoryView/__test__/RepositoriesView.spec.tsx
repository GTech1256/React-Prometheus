import React from 'react';
import renderer from 'react-test-renderer';

import { RepositoryResponseType } from '../../../../../services/graphql/queries/getRepositories';
import RepositoryView from '../RepositoryView';


describe('<RepositoryView />', () => {
  it('should render correct', () => {
    const props: RepositoryResponseType = {
      name: 'name',
      owner: {
        login: 'login'
      },
      url: 'url',
      stargazers: { totalCount: 999 },
      description: 'description',
    }

    const tree = renderer
      .create(<RepositoryView {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  })
})