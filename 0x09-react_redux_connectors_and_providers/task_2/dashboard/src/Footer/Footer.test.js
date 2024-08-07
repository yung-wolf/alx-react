import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
//  using StyleSheetTestUtils.suppressStyleInjection at the top of your test file, to prevent issues with style injections
import { StyleSheetTestUtils } from 'aphrodite';
StyleSheetTestUtils.suppressStyleInjection();

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });

  it('does not display the link when user is logged out', () => {
    const wrapper = shallow(<Footer user={null} />);
    expect(wrapper.find('a').exists()).toBe(false);
  });

  it('displays the link when user is logged in', () => {
    const user = { isLoggedIn: true };
    const wrapper = shallow(<Footer user={user} />);
    expect(wrapper.find('a').exists()).toBe(true);
  });
});
