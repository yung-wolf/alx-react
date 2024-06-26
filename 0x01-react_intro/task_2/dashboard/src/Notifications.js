import React from 'react';
import "./Notifications.css";
import CloseIcon from './close-cross_64498.png';
import { getLatestNotification } from './utils';

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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}} />
      </ul>
    </div>
  )
}

export default Notifications;