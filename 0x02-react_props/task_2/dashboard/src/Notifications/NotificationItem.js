// Create a new component named NotificationItem:
// it should render a li tag
// the component accept three properties (type, html, and value)
// type should be rendered with the data-notification-type attribute
// value should be rendered within the tag
// html should be rendered with the dangerouslySetInnerHTML attribute


import React from 'react';

export default function NotificationItem({type, html, value}) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html} value={value} />
  )
}
