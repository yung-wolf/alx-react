import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

const initialState = {
  notifications: [],
  filter: 'DEFAULT'
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const updatedNotifications = action.data.map(notification => ({
        ...notification,
        isRead: false
      }));
      return {
        ...state,
        notifications: updatedNotifications
      };
    case MARK_AS_READ:
      const newNotifications = state.notifications.map(notification =>
        notification.id === action.index ? { ...notification, isRead: true } : notification
      );
      return {
        ...state,
        notifications: newNotifications
      };
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
};

export default notificationReducer;
