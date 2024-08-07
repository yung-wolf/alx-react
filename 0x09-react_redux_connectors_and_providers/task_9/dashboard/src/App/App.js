import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes, { func } from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import WithLogging from '../HOC/WithLogging';
import { StyleSheet, css } from 'aphrodite';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest, logout } from '../actions/uiActions';
// import MyLogo from '../assets/Holberton-logo.jpg';

// create a new array named listCourses. It should contains three elements:
const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
]

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available', html: {__html: 'New course available'} },
  { id: 2, type: 'urgent', value: 'New resume available', html: {__html: 'New resume available'} },
  { id: 3, type: 'urgent', value: 'latestNotification', html: { __html: getLatestNotification()} },
]

class App extends Component {
  constructor(props) {
    super(props);
  }


  // Lifecycle methods
  componentDidMount() {
    // Add event listener to listen to when the user is pressing down the keyboard keys
    window.addEventListener('keydown', this.handleKeyDown)
  }

  // remove the event listener when the component is unmounted
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  // handle keydown event
  // When the user is pressing down the control and the h keys simultaneously
  // display the alert Logging you out and call the function logOut
  handleKeyDown = event => {
    if (event.key === 'h' && event.ctrlKey) {
      event.preventDefault();
      alert('Logging you out')
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer, login } = this.props;

    return (
      <>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer= {hideNotificationDrawer}
        />
        <div className={css(styles.app)}>
          <div className="App-header">
            <Header />
          </div>
  
          <hr className={css([styles.hr])} />
  
          <div className={css(styles.appBody)}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login login={login}/>
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices sit amet tellus vitae mattis. Cras tincidunt eleifend elementum. Vivamus nec metus lectus. Etiam molestie quam pulvinar sem convallis, eget tristique est rhoncus. Integer diam enim, dapibus quis nulla et, suscipit porta turpis. Pellentesque quis turpis finibus, efficitur libero ut, pulvinar metus. 
              </p>
            </BodySection>
          </div>
  
          <div className={css([styles.appFooter])}>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

// for in-line styling
const styles = StyleSheet.create({
  app: {
    paddingTop: 0,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: 'left',
    fontSize: '1.2em',
  },
  appBody: {
    color: 'black',
    padding: 20,
    paddingLeft: 60,
    paddingRight: 60,
  },
  appFooter: {
    position: 'fixed',
    bottom: '0',
    height: '10vh',
    width: '96.1%',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  hr : {
    border: '2px solid rgb(229, 8, 8)',
  }
})

// Define proptypes
App.propTypes = {
  isLoggedIn: Proptypes.bool,
  logOut: Proptypes.func,
  login: Proptypes.func,
  displayDrawer: Proptypes.bool,
  displayNotificationDrawer: Proptypes.func,
  hideNotificationDrawer: Proptypes.func
}

// Define default props
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
  login: () => {},
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {}
}

// Maps the Redux state to props for the connected component.
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.get('isUserLoggedIn'),
    displayDrawer: state.ui.get('isNotificationDrawerVisible')
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  logOut: logout,
  login: loginRequest  // map loginRequest to the login prop
};

export { App };
export default connect(mapStateToProps, mapDispatchToProps)(WithLogging(App));
