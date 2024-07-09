import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
//  using StyleSheetTestUtils.suppressStyleInjection at the top of your test file, to prevent issues with style injections
import { StyleSheetTestUtils } from 'aphrodite';
StyleSheetTestUtils.suppressStyleInjection();

// Renders the Login without crashing
it('renders Login without crashing', () => {
  shallow(<Login />);
})

// Verify that Login renders 2 input tags
it('renders 2 input tags', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('input').length).toEqual(2);
})

// Verify that Login renders 2 label tags
it('renders 2 label tags', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('label').length).toEqual(2);
})