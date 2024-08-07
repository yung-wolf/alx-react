import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

// Renders the Notifications without crashing
it('renders without crashing', () => {
  shallow(<Notifications />);
})

// verify that Notifications renders three list items
// it('renders three list items', () => {
//   const wrapper = shallow(<Notifications />);
//   expect(wrapper.find('NotificationItem').length).toEqual(3);
// })

// verify that Notifications renders the text Here is the list of notifications
// it('renders the text Here is the list of notifications', () => {
//   const wrapper = shallow(<Notifications />);
//   expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(true);
// })

// Add a check that the menu item is being displayed when displayDrawer is false
it('menu item is being displayed when displayDrawer is false', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('.menuItem').exists()).toBe(true);
})

// Add a check that the div.Notifications is not being displayed when displayDrawer is false
it('div.Notifications is not being displayed when displayDrawer is false', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('div.Notifications').exists()).toBe(false);
})