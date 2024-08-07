import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
//  using StyleSheetTestUtils.suppressStyleInjection at the top of your test file, to prevent issues with style injections
import { StyleSheetTestUtils } from 'aphrodite';
StyleSheetTestUtils.suppressStyleInjection();

// Renders the Header without crashing
describe('<Header />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders h1 element', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('renders img element', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('does not create logoutSection when user is logged out', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  it('creates logoutSection when user is logged in', () => {
    const user = { isLoggedIn: true, email: 'test@test.com' };
    const wrapper = shallow(<Header user={user} />);
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
  });
});
