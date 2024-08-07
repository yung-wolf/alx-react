import { Map } from 'immutable';
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('should return the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual(Map());
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
    const expectedState = Map({
      '1': { id: 1, name: 'ES6', credit: 60, isSelected: false },
      '2': { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      '3': { id: 3, name: 'React', credit: 40, isSelected: false },
    });

    expect(courseReducer(undefined, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle SELECT_COURSE', () => {
    const fetchAction = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };
    const state = courseReducer(undefined, fetchAction);
    
    const selectAction = {
      type: SELECT_COURSE,
      index: 2,
    };
    const expectedState = state.setIn(['2', 'isSelected'], true);

    expect(courseReducer(state, selectAction).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle UNSELECT_COURSE', () => {
    const fetchAction = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };
    const state = courseReducer(undefined, fetchAction);
    
    const selectAction = {
      type: SELECT_COURSE,
      index: 2,
    };
    const newState = courseReducer(state, selectAction);
    
    const unselectAction = {
      type: UNSELECT_COURSE,
      index: 2,
    };
    const expectedState = newState.setIn(['2', 'isSelected'], false);

    expect(courseReducer(newState, unselectAction).toJS()).toEqual(expectedState.toJS());
  });
});
