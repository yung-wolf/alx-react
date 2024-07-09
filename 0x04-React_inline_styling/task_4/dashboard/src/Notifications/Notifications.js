import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import CloseIcon from '../assets/close-cross_64498.png';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        {listNotifications.length === 0 ? (
          <strong className={css(styles.menuItem)} id={css(styles.firstNotMenu)}>
            No new notification for now
          </strong>
        ) : (
          <div className={css(styles.notificationContainer)}>
            <div className={css(styles.menuItem)}>Your notifications</div>

            {displayDrawer && (
              <div className={css(styles.Notifications)}>
                <button
                  aria-label='Close'
                  className={css(styles.closeButton)}
                >
                  <img src={CloseIcon} alt="close icon" />
                </button>

                <p>Here is the list of notifications</p>
                <ul className={css(styles.notificationList)}>
                  {listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      id={notification.id}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: Proptypes.bool,
  listNotifications: Proptypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const priColors = {
  red: 'rgb(229, 8, 8)',
};

const styles = StyleSheet.create({
  notificationContainer: {
    position: 'relative',
  },
  menuItem: {
    fontFamily: ["Times New Roman", 'Times', 'serif'],
    fontSize: '1.2em',
    marginTop: 8,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 0,
    textAlign: 'right',
  },
  Notifications: {
    width: '85vw',
    height: '100vh',
    backgroundColor: 'white',
    border: `2px dashed ${priColors.red}`,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    margin: 10,
    position: 'fixed',
    right: 0,
    top: 0,
    fontSize: '20px',
    fontFamily: ['Times New Roman', 'Times', 'serif'],
    zIndex: 1000,
    overflowY: 'scroll',
  },
  closeButton: {
    contentAlign: 'right',
    position: 'absolute',
    right: '10px',
    top: '10px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },
  firstNotMenu: {
    display: 'inline-block',
    width: '96%',
    color: 'rgb(229, 8, 8)',
  },
  notificationList: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
  },
});

export default Notifications;
