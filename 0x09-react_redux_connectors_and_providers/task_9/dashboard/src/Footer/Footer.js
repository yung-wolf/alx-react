import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { getFooterCopy, getFullYear } from '../utils/utils';

function Footer({ user }) {
  return (
    <footer className={css(styles.footer)}>
      <hr className={css(styles.hr)} />
      <p className={css(styles.p)}>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user && user.isLoggedIn && (
        <p className={css(styles.p)}>
          <a href="#" className={css(styles.a)}>Contact us</a>
        </p>
      )}
    </footer>
  );
}

Footer.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
    email: PropTypes.string
  })
};

Footer.defaultProps = {
  user: null
};

const styles = StyleSheet.create({
  footer: {
    textAlign: 'center',
    padding: '1rem',
    fontStyle: 'italic',
  },
  hr: {
    border: '2px solid rgb(229, 8, 8)',
  },
  p: {
    margin: '0.5rem 0',
  },
  a: {
    color: 'red',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    }
  }
});

const mapStateToProps = (state) => ({
  user: state.ui.get('user')
});

export { Footer };
export default connect(mapStateToProps)(Footer);