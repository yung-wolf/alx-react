import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './uiActionTypes';

export const displayNotificationDrawer = () => ({ type: DISPLAY_NOTIFICATION_DRAWER });
export const hideNotificationDrawer = () => ({ type: HIDE_NOTIFICATION_DRAWER });
export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const loginFailure = () => ({ type: LOGIN_FAILURE });
export const loginRequest = (email, password) => {
  // make an api call
  return async (dispatch) => {
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (data.error) {
      dispatch(loginFailure());
    } else {
      dispatch(loginSuccess());
    }
  }
}
export const logout = () => ({ type: LOGOUT });
