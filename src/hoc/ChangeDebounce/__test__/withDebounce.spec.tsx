import React from 'react';
import renderer from 'react-test-renderer';

import withDebounce from '../withDebounce'

const SomeComponent = () => <input />

describe('HOC: withDebounce', () => {
  it('should render correct', () => {
    const SomeComponentWithDebounce = withDebounce(SomeComponent);

    const tree = renderer
      .create(<SomeComponentWithDebounce />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  })
})