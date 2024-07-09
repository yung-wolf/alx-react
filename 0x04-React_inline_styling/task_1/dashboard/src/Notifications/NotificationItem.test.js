import React from 'react';
import NotificationItem from "./NotificationItem";
import { shallow } from 'enzyme';

// Verify that the basic rendering of the component works without crashing
it('renders without crashing', () => {
  shallow(<NotificationItem />);
})

// Verify that by passing dummy type and value props, it renders the correct html (for example: type=“default” and value=“test”)
it('renders the correct html', () => {
  const wrapper = shallow(<NotificationItem type='default' value='test' html={{ __html: ''}} />);
  expect(wrapper.html()).toBe('<li data-notification-type="default" value="test"></li>');
})

// Verify that by passing a dummy html prop, it renders the correct html (for example: html={{ __html: '<u>test</u>' }})
it('renders the correct html', () => {
  const wrapper = shallow(<NotificationItem type="default" value="test" html={{ __html: '<u>test</u>'}} />)
  expect(wrapper.html()).toBe('<li data-notification-type="default" value="test"><u>test</u></li>');
})