import { Map } from 'immutable';
import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(Map({
      notifications: Map(),
      filter: 'DEFAULT',
    }));
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' },
      ],
    };
    const expectedState = Map({
      filter: 'DEFAULT',
      notifications: Map({
        '1': { id: 1, isRead: false, type: 'default', value: 'New course available' },
        '2': { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        '3': { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      }),
    });

    expect(notificationReducer(undefined, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle SET_TYPE_FILTER', () => {
    const fetchAction = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' },
      ],
    };
    const state = notificationReducer(undefined, fetchAction);

    const filterAction = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };
    const expectedState = state.set('filter', 'URGENT');

    expect(notificationReducer(state, filterAction).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle MARK_AS_READ', () => {
    const fetchAction = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' },
      ],
    };
    const state = notificationReducer(undefined, fetchAction);

    const readAction = {
      type: MARK_AS_READ,
      index: 2,
    };
    const expectedState = state.setIn(['notifications', '2', 'isRead'], true);

    expect(notificationReducer(state, readAction).toJS()).toEqual(expectedState.toJS());
  });
});
