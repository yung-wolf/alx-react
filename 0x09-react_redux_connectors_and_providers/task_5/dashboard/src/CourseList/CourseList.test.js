import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
//  using StyleSheetTestUtils.suppressStyleInjection at the top of your test file, to prevent issues with style injections
import { StyleSheetTestUtils } from 'aphrodite';
StyleSheetTestUtils.suppressStyleInjection();

// create a new array named listCourses. It should contains three elements:
const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
]

// Check that it renders CourseList component without crashing
it('renders without crashing', () => {
  shallow(<CourseList />);
})

// Check that it renders the 1 row when listCourses is not passed
it('renders the 5 different rows', () => {
  const wrapper = shallow(<CourseList />);
  expect(wrapper.find('CourseListRow').length).toEqual(1);
})

// verify that CourseList renders correctly if you pass an empty array
it('renders correctly when listCourses = []', () => {
  const wrapper = shallow(<CourseList listCourses={[]} />);
  expect(wrapper.find('CourseListRow').length).toEqual(1);
})

// verify that when you pass a list of courses, the component renders it correctly
it('renders correctly when listCourses is passed', () => {
  const wrapper = shallow(<CourseList listCourses={listCourses} />);
  expect(wrapper.find('CourseListRow').length).toEqual(5);
})