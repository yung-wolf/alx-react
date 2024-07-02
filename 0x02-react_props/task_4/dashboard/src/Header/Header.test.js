import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

// Renders the Header without crashing
it('renders without crashing', () => {
  shallow(<Header />);
})

// Renders h1 element
it('renders h1 element', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('h1').length).toEqual(1);
})

// Verify that Header renders img element
it('renders img element', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('img').length).toEqual(1);
})