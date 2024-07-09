import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import "./Notifications.css";
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import CloseIcon from '../assets/close-cross_64498.png';
// import { getLatestNotification } from '../utils/utils';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    // Only update if the new listNotifications has more elements than the previous one
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

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
                  {listNotifications.map(notification => <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} id={notification.id} markAsRead={this.markAsRead} />)}
                </ul>
              </div>
            )}
          </div>
        }
      </>
    )
  }
}

// Define Proptypes
Notifications.Proptypes = {
  displayDrawer: Proptypes.bool,
  listNotifications: Proptypes.arrayOf(NotificationItemShape)
}

// Define Proptypes default values
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}

export default Notifications;