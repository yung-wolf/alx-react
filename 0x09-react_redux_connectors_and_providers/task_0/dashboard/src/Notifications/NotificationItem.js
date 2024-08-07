import React from 'react';
import Proptypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function NotificationItem({type, html, value, markAsRead, id}) {
  let li;

  if (value) {
    li = (
      <li
        className={css(type === 'urgent' ? styles.urgent : styles.default)}
        data-notification-type={type}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  } else {
    li = (
      <li
        className={css(type === 'urgent' ? styles.urgent : styles.default)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
      ></li>
    );
  }

  return li;
}

// rules for in-line styles using Aphrodite
const styles = StyleSheet.create({
  default: {
    color: 'rgba(2, 2, 125, 0.967)',
    width: '100%',
    borderBottom: '1px solid black',
    fontSize: '20px',
    padding: '10px 8px',
    boxSizing: 'border-box',
  },
  urgent: {
    color: 'red',
    width: '100%',
    borderBottom: '1px solid black',
    fontSize: '20px',
    padding: '10px 8px',
    boxSizing: 'border-box',
  },
});

// Define Proptypes
NotificationItem.propTypes = {
  type: Proptypes.string.isRequired,
  html: Proptypes.shape({
    __html: Proptypes.string.isRequired
  }),
  value: Proptypes.string,
  markAsRead: Proptypes.func,
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

// Make the component pure by wrapping it with React.memo
export default React.memo(NotificationItem);
