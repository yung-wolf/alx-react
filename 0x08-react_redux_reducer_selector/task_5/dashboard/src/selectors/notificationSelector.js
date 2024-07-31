import { createSelector } from 'reselect';

// Input selector: direct access to filter and notifications from the state
const filterSelector = (state) => state.notifications.get('filter');
const notificationsSelector = (state) => state.notifications.get('notifications');

// Selector for filter type
export const filterTypeSelected = createSelector(
  filterSelector,
  (filter) => filter
);

// Selector for notifications
export const getNotifications = createSelector(
  notificationsSelector,
  (notifications) => notifications
);

// Selector for unread notifications
export const getUnreadNotifications = createSelector(
  notificationsSelector,
  (notifications) => notifications.filter(notification => !notification.isRead)
);
