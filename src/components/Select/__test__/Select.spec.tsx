import React from 'react';
import renderer from 'react-test-renderer';

import Select, { SelectProps } from '../index'


const props: SelectProps = {
  className: 'test-class-name',
  name: 'testSelect',
  title: 'testTitle',
  options: [
    { value: 'value1', label: 'lebel1', isSelected: true },
    { value: 'value3', label: 'lebel2' }
  ],
  onChange: () => {}
}

describe('<Select />', () => {
  it('should render correct', () => {
    const tree = renderer
      .create(<Select {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  })
})