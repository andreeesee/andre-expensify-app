import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../component/NotFound';

test('should render NotFoundPage correctly', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
