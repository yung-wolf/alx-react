import { Map } from 'immutable';
import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/uiActionTypes';

// Initial state for reference
const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map({})
});

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const action = { type: 'SELECT_COURSE' };
    const state = uiReducer(undefined, action);
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should change isNotificationDrawerVisible to true when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = initialState.set('isNotificationDrawerVisible', true);
    const state = uiReducer(undefined, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  // Optional: Add more tests for other actions
  it('should change isNotificationDrawerVisible to false when the action HIDE_NOTIFICATION_DRAWER is passed', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const expectedState = initialState.set('isNotificationDrawerVisible', false);
    const state = uiReducer(undefined, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  it('should change isUserLoggedIn to true when the action LOGIN_SUCCESS is passed', () => {
    const action = { type: LOGIN_SUCCESS };
    const expectedState = initialState.set('isUserLoggedIn', true);
    const state = uiReducer(undefined, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  it('should change isUserLoggedIn to false when the action LOGIN_FAILURE is passed', () => {
    const action = { type: LOGIN_FAILURE };
    const expectedState = initialState.set('isUserLoggedIn', false);
    const state = uiReducer(undefined, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  it('should change isUserLoggedIn to false when the action LOGOUT is passed', () => {
    const action = { type: LOGOUT };
    const expectedState = initialState.set('isUserLoggedIn', false);
    const state = uiReducer(undefined, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });
});

describe('uiReducer', () => {
  it('returns the initial state when no action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null
    });
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('returns the correct state for LOGIN action', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null
    });
    const user = { email: 'test@test.com' };
    const action = { type: actions.LOGIN, user };
    const expectedState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: Map(user)
    });
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });

  it('returns the correct state for LOGOUT action', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: Map({ email: 'test@test.com' })
    });
    const action = { type: actions.LOGOUT };
    const expectedState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null
    });
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });
});