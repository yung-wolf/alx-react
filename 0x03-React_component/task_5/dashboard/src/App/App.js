import React, { Component } from 'react';
import Proptypes, { func } from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import WithLogging from '../HOC/WithLogging';
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
  { id: 3, type: 'urgent', valie: 'latestNotification', html: { __html: getLatestNotification()} },
]

class App extends Component {
  constructor(props) {
    super(props)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }


  // Lifecycle methods
  componentDidMount() {
    // Add event listener to listen to when the user is pressing down the keyboard keys
    window.addEventListener('keydown', this.handleKeyDown)
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

  // remove the event listener when the component is unmounted
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <div className="App-header">
            <Header />
          </div>
  
          <hr />
  
          <div className="App-body">
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Here is the latest news from the school: We have exciting new courses and events coming up this semester. Stay tuned!</p>
            </BodySection>
          </div>
  
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}


// Define proptypes
App.propTypes = {
  isLoggedIn: Proptypes.bool,
  logOut: Proptypes.func
}

// Define default props
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}

export default WithLogging(App);
