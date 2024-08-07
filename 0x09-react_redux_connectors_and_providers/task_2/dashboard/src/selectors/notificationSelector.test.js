import { Map } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notification selectors', () => {
  const state = Map({
    notifications: Map({
      filter: 'DEFAULT',
      notifications: Map({
        '1': { id: 1, isRead: false, type: 'default', value: 'New course available' },
        '2': { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        '3': { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      }),
    }),
  });

  it('filterTypeSelected returns the correct filter type', () => {
    const filter = filterTypeSelected(state);
    expect(filter).toBe('DEFAULT');
  });

  it('getNotifications returns a list of notification entities', () => {
    const notifications = getNotifications(state);
    expect(notifications.toJS()).toEqual({
      '1': { id: 1, isRead: false, type: 'default', value: 'New course available' },
      '2': { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      '3': { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    });
  });

  it('getUnreadNotifications returns a list of unread notification entities', () => {
    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications.toJS()).toEqual({
      '1': { id: 1, isRead: false, type: 'default', value: 'New course available' },
      '3': { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    });
  });
});
