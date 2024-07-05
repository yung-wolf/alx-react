import React from 'react';
import Proptypes from 'prop-types';
import "./Notifications.css";
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import CloseIcon from '../assets/close-cross_64498.png';
// import { getLatestNotification } from '../utils/utils';

const Notifications = ({ displayDrawer, listNotifications }) => {
  return (
    <>
      {listNotifications.length == 0 ? <strong className="menuItem" id="first-not-menu">No new notification for now</strong> :
        <div className="notification-container">
          <div className="menuItem">Your notifications</div>
  
          {displayDrawer && (
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
                {/* <NotificationItem data-priority="default" type="default" value='New course available' html={{__html: 'New course available'}} />
                <NotificationItem data-priority="urgent" type="urgent" value='New resume available' html={{__html: 'New resume available'}} />
                <NotificationItem data-priority="urgent" type="urgent" value='latestNotification' html={{__html: getLatestNotification()}} /> */}

                {listNotifications.map(notification => <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />)}
              </ul>
            </div>
          )}
        </div>
      }
    </>
  )
}

// Define Proptypes
Notifications.Proptypes = {
  displayDrawer: Proptypes.bool,
  listNotifications: Proptypes.arrayOf(NotificationItemShape)
}

// Define Proptypes default values
Notifications.defaultProps = {
  displayDrawer: false
}

export default Notifications;