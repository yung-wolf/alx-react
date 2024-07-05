// Create a new component named NotificationItem:
// it should render a li tag
// the component accept three properties (type, html, and value)
// type should be rendered with the data-notification-type attribute
// value should be rendered within the tag
// html should be rendered with the dangerouslySetInnerHTML attribute


import React from 'react';
import Proptypes from 'prop-types';

export default function NotificationItem({type, html, value, markAsRead, id}) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html} value={value} onClick={() => markAsRead(id)} />
  )
}

// Define Proptypes
NotificationItem.Proptypes = {
  type: Proptypes.string.isRequired,
  html: Proptypes.shape({
    __html: Proptypes.string.isRequired
  }),
  value: Proptypes.string.isRequired,
  markAsRead: Proptypes.func.isRequired,
  id: Proptypes.number.isRequired
}

// Define default props
NotificationItem.defaultProps = {
  type: 'default',
  html: {},
  value: '',
  markAsRead: () => {},
  id: 0
}
