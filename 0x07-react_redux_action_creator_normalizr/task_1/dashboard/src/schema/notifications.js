import { schema } from 'normalizr';
import * as notifications from '../../notifications.json';

function getAllNotificationsByUser(userId) {
  return notifications.default.filter(notification => notification.author.id === userId)
    .map(notification => notification.context);
}

export { getAllNotificationsByUser };

// Create user entity
const user = new schema.Entity('users');

// Create message entity
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

// Create notification entity
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export { user, message, notification };