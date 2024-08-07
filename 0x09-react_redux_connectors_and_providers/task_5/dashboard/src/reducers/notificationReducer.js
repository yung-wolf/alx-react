import { Map } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

// Define the initial state as an Immutable Map
const initialState = Map({
  notifications: Map(),
  filter: 'DEFAULT',
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      const notifications = normalizedData.entities.notifications;
      Object.keys(notifications).forEach((id) => {
        notifications[id].isRead = false;
      });
      return state.mergeDeep({ notifications: notifications });
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case MARK_AS_READ:
      return state.setIn(['notifications', String(action.index), 'isRead'], true);
    default:
      return state;
  }
};

export default notificationReducer;
