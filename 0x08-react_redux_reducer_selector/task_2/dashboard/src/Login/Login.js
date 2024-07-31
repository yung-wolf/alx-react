/**
 * Renders the login form for accessing the dashboard.
 *
 * @return {JSX.Element} The login form JSX
 */

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.inputGroup)}>
        <label htmlFor="email" className={css(styles.label)}>Email: </label>
        <input type="email" id="email" className={css(styles.input)} />
      </div>
      <div className={css(styles.inputGroup)}>
        <label htmlFor="password" className={css(styles.label)}>Password: </label>
        <input type="password" id="password" className={css(styles.input)} />
      </div>
      <button className={css(styles.button)}>OK</button>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    '@media (min-width: 900px)': {
      maxWidth: '600px',
      margin: '0 auto',
    }
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
    '@media (min-width: 900px)': {
      flexDirection: 'row',
      alignItems: 'center',
    }
  },
  label: {
    marginBottom: '5px',
    '@media (min-width: 900px)': {
      marginBottom: '0',
      marginRight: '10px',
    }
  },
  input: {
    '@media (min-width: 900px)': {
      flex: '1',
    }
  },
  button: {
    display: 'block',
    marginTop: '10px',
    '@media (min-width: 900px)': {
      marginTop: '0',
    }
  }
});

export default Login;
