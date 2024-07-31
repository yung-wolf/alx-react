import { normalize, schema } from 'normalizr';
import * as notificationData from '../../notifications.json';


const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, {
  idAttribute: "guid"
});

const notification = new schema.Entity("notifications", {
  author: user,
  context: message
});

const normalizedData = normalize(notificationData.default, [notification]);
export { user, message, notification, normalizedData };


export function getAllNotificationsByUser(userId) {
  const { notifications, messages } = normalizedData.entities;
  const userNotifications = [];

  for (const key in notifications) {
    if (notifications[key].author === userId) {
      userNotifications.push(messages[notifications[key].context]);
    }
  }

  return userNotifications;
}