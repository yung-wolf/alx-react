import { Map } from 'immutable';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGIN
} from '../actions/uiActionTypes';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null
});

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case LOGIN:
    case LOGIN_SUCCESS:
      return state.merge({
        isUserLoggedIn: true,
        user: Map(action.user) // Convert the user object to an Immutable Map
      });
    case LOGIN_FAILURE:
      return state.merge({
        isUserLoggedIn: false,
        user: null
      });
    case LOGOUT:
      return state.merge({
        isUserLoggedIn: false,
        user: null
      });
    default:
      return state;
  }
}
