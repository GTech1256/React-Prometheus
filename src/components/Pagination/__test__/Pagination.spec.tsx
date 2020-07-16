import React from 'react';
import renderer from 'react-test-renderer';

import Pagination, { PaginationProps } from '../index'


const props: PaginationProps = {
  hasNextPage: true,
  onPrev: () => {},
  onNext: () => {},
}

describe('<Pagination />', () => {
  it('should render correct', () => {
    const tree = renderer
      .create(<Pagination {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  })
})