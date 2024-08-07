import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import MyLogo from '../assets/holberton-logo.jpg';
import { logout } from '../actions/uiActions';

function Header({ user, logout }) {
  return (
    <header className={css(styles.appHeader)}>
      <img src={MyLogo} className={css(styles.appLogo)} alt="logo" />
      <h1 className={css(styles.heading)}>School dashboard</h1>
      {user && user.isLoggedIn && (
        <div id="logoutSection" className={css(styles.logoutSection)}>
          Welcome {user.email} (
          <a href="#" onClick={(e) => {
            e.preventDefault();
            logout();
          }}>logout</a>
          )
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
    email: PropTypes.string
  }),
  logout: PropTypes.func.isRequired
};

Header.defaultProps = {
  user: null
};

// for in-line styling
const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: '#fff',
    borderBottom: '3px solid #e0354b',
    color: '#e0354b',
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
  },
  appLogo: {
    height: '40px',
    marginRight: '1rem',
  },
  heading: {
    fontSize: '1.4rem',
    marginRight: 'auto',
  },
  logoutSection: {
    fontSize: '1rem',
  }
});

const mapStateToProps = (state) => ({
  user: state.ui.get('user')
});

const mapDispatchToProps = {
  logout
};

export { Header }; // Export unconnected component for testing
export default connect(mapStateToProps, mapDispatchToProps)(Header);  // Connect the component