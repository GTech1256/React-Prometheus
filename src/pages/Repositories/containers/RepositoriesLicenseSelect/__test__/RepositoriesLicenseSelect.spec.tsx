import React from 'react';
import { ApolloProvider } from '@apollo/client';
import renderer from 'react-test-renderer';

import RepositoriesLicenseSelect from '../RepositoriesLicenseSelect';
import { client } from '../../../../../services/graphql';


describe('<RepositoriesLicenseSelect />', () => {
  it('should render correct', () => {
    const props = {
      name: 'test',
      onChange: () => {},
      value: undefined
    };

    const tree = renderer
      .create(<ApolloProvider client={client}><RepositoriesLicenseSelect {...props} /></ApolloProvider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  })
})