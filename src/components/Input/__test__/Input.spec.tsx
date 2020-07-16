import React from 'react';
import renderer from 'react-test-renderer';

import Input, { InputProps } from '../index'


const props: InputProps = {
  className: 'test-class-name',
  name: 'testSelect',
  label: 'testTitle',
  onChange: () => {}
}

describe('<Input />', () => {
  it('should render correct', () => {
    const tree = renderer
      .create(<Input {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  })
})