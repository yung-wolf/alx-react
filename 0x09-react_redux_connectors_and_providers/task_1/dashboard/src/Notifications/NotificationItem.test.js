import React from 'react';
import NotificationItem from "./NotificationItem";
import { shallow } from 'enzyme';
//  using StyleSheetTestUtils.suppressStyleInjection at the top of your test file, to prevent issues with style injections
import { StyleSheetTestUtils } from 'aphrodite';
StyleSheetTestUtils.suppressStyleInjection();

// Verify that the basic rendering of the component works without crashing
it('renders without crashing', () => {
  shallow(<NotificationItem />);
})

// Verify that by passing dummy type and value props, it renders the correct html (for example: type=“default” and value=“test”)
it('renders the correct html', () => {
  const wrapper = shallow(<NotificationItem type='default' value='test' html={{ __html: ''}} />);
  wrapper.update();
  const listItem = wrapper.find("li");

  expect(listItem).toHaveLength(1);
  expect(listItem.text()).toEqual("test");
  expect(listItem.prop("data-notification-type")).toEqual("default");
  // expect(wrapper.html()).toBe('<li data-notification-type="default" value="test"></li>');
})

// Verify that by passing a dummy html prop, it renders the correct html (for example: html={{ __html: '<u>test</u>' }})
it('renders the correct html with html prop', () => {
  const wrapper = shallow(<NotificationItem type='default' value='' html={{ __html: '<u>test</u>' }} />);
  wrapper.update();
  const listItem = wrapper.find("li");

  expect(listItem).toHaveLength(1);
  expect(listItem.html()).toContain('<u>test</u>');
});
