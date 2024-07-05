import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
// import MyLogo from '../assets/Holberton-logo.jpg';

// create a new array named listCourses. It should contains three elements
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
  render () {
    const { isLoggedIn } = this.props;

    return (
      <>
        <Notifications listNotifications={listNotifications}/>
        <div className="App">
  
          <div className="App-header">
            <Header />
          </div>
  
          <hr />
  
          <div className="App-body">
            {isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login />}
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
  isLoggedIn: Proptypes.bool
}

// Define default props
App.defaultProps = {
  isLoggedIn: false
}

export default App;
