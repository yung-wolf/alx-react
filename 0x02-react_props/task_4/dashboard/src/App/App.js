import React from 'react';
import Proptypes from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
// import MyLogo from '../assets/Holberton-logo.jpg';

const App = ({ isLoggedIn }) => {
  return (
    <>
      <Notifications />
      <div className="App">

        <div className="App-header">
          <Header />
        </div>

        <hr />

        <div className="App-body">
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>

        <div className="App-footer">
          <Footer />
        </div>

      </div>
    </>
  );
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
