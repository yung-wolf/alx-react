import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

// When isHeader is true
// Add a check to test the component renders one cell with colspan = 2 when textSecondCell does not exist

it('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', () => {
  const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first cell' />);
  expect(wrapper.find('th').length).toEqual(1);
  expect(wrapper.find('th').prop('colSpan')).toEqual("2");
})

// Add a check to test the component renders two cells when textSecondCell is present
it('renders two cells when textSecondCell is present when isHeader is true', () => {
  const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first cell' textSecondCell='second cell' />);
  expect(wrapper.find('th').length).toEqual(2);
})

// When isHeader is false
// Add a check to test the component renders correctly two td elements within a tr element
it('renders correctly two td elements within a tr element when isHeader is false', () => {
  const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='first cell' textSecondCell='second cell' />);
  expect(wrapper.find('td').length).toEqual(2);
  expect(wrapper.find('tr').length).toEqual(1);
})