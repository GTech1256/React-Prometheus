import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloProvider } from '@apollo/client';

import { client } from '../../../services/graphql';
import Repositories from '../Repositories';


describe('<Repositories />', () => {
  it('should render correct', () => {
    const tree = renderer
      .create(<ApolloProvider client={client}><Repositories /></ApolloProvider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  })
})