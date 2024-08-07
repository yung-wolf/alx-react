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

// Create a function to normalize data
export const notificationsNormalizer = (data) => {
  return normalize(data, [notification]);
};