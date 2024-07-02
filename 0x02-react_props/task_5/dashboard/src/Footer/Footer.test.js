import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

// Renders the Footer without crashing
it('renders Footer without crashing', () => {
  shallow(<Footer />);
})

// Verify that the components at the very least render the text “Copyright”
it('atleast renders the text Copyright', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.text()).toContain('Copyright');
})