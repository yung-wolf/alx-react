import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

// When isHeader is true
// Add a check to test the component renders one cell with colspan = 2 when textSecondCell does not exist
it('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', () => {
  const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first cell' />);
  const thElement = wrapper.find('th');
  expect(thElement.length).toEqual(1);
  expect(thElement.prop('colSpan')).toEqual("2");
  expect(thElement.text()).toEqual('first cell');
});

// Add a check to test the component renders two cells when textSecondCell is present
it('renders two cells when textSecondCell is present when isHeader is true', () => {
  const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first cell' textSecondCell='second cell' />);
  const thElements = wrapper.find('th');
  expect(thElements.length).toEqual(2);
  expect(thElements.at(0).text()).toEqual('first cell');
  expect(thElements.at(1).text()).toEqual('second cell');
});

// When isHeader is false
// Add a check to test the component renders correctly two td elements within a tr element
it('renders correctly two td elements within a tr element when isHeader is false', () => {
  const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='first cell' textSecondCell='second cell' />);
  const tdElements = wrapper.find('td');
  const trElement = wrapper.find('tr');
  expect(trElement.length).toEqual(1);
  expect(tdElements.length).toEqual(2);
  expect(tdElements.at(0).text()).toEqual('first cell');
  expect(tdElements.at(1).text()).toEqual('second cell');
});
