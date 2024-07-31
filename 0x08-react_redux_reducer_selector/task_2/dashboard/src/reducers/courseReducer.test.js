import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  const initialState = [
    { id: 1, name: 'ES6', credit: 60, isSelected: false },
    { id: 2, name: 'Webpack', credit: 20, isSelected: false },
    { id: 3, name: 'React', credit: 40, isSelected: false },
  ];

  it('should return the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };
    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];

    expect(courseReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE', () => {
    const action = {
      type: SELECT_COURSE,
      index: 2,
    };
    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];

    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE', () => {
    const selectAction = {
      type: SELECT_COURSE,
      index: 2,
    };
    const stateAfterSelect = courseReducer(initialState, selectAction);

    const unselectAction = {
      type: UNSELECT_COURSE,
      index: 2,
    };
    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];

    expect(courseReducer(stateAfterSelect, unselectAction)).toEqual(expectedState);
  });
});
