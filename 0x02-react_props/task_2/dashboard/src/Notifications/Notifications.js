import React from 'react';
import "./Notifications.css";
import NotificationItem from './NotificationItem';
import CloseIcon from '../assets/close-cross_64498.png';
import { getLatestNotification } from '../utils/utils';

function Notifications() {
  return (
    <div className="Notifications">
      <button
        aria-label='Close'
        style={{
          'contentAlign':'right',
          'position':'absolute',
          'right':'10px',
          'top':'10px',
          'border':'none',
          'background':'none',
          'cursor':'pointer',
          }}>
            <img src={CloseIcon} alt="close icon"/>
      </button>

      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem data-priority="default" type="default" value='New course available' html={{__html: 'New course available'}} />
        <NotificationItem data-priority="urgent" type="urgent" value='New resume available' html={{__html: 'New resume available'}} />
        <NotificationItem data-priority="urgent" type="urgent" value='latestNotification' html={{__html: getLatestNotification()}} />
      </ul>
    </div>
  )
}

export default Notifications;