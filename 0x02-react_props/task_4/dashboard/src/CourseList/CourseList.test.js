import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

// Check that it renders CourseList component without crashing
it('renders without crashing', () => {
  shallow(<CourseList />);
})

// Check that it renders the 5 different rows
it('renders the 5 different rows', () => {
  const wrapper = shallow(<CourseList />);
  expect(wrapper.find('CourseListRow').length).toEqual(5);
})