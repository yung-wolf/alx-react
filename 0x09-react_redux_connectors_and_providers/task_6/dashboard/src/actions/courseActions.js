import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';

// Action creator for fetching courses successfully
export const fetchCourseSuccess = (data) => ({
  type: FETCH_COURSE_SUCCESS,
  data,
});

// Action creator for selecting a course
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

// Action creator for unselecting a course
export const unselectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});
