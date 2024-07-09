/**
 * Renders the login form for accessing the dashboard.
 *
 * @return {JSX.Element} The login form JSX
 */

import React from 'react'
import { StyleSheet, css } from 'aphrodite'

function Login() {
  return (
    <>
      <p>
        Login to access the full dashboard
      </p>
      <label htmlFor="email" >Email: </label>
      <input type="email" id="email" />
      <label htmlFor="password" className={css(styles.input)}>Password: </label>
      <input type="password" id="password" />
      <button className={css(styles.input)}>OK</button>
    </>
  )
}

// rules for in-line styling
const styles = StyleSheet.create({
  input: {
    marginLeft: 10,
  }
})

export default Login