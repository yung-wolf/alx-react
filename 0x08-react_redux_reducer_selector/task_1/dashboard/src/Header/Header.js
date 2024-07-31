/**
 * Renders the header component of the application (App).
 *
 * @return {JSX.Element} The JSX element representing the header.
 */

import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import MyLogo from '../assets/holberton-logo.jpg'

function Header() {
  return (
    <div className={css(styles.appHeader)}>
      <img src={MyLogo} className={css(styles.appLogo2)} alt="logo" />
      {/* <div className="App-logo"></div> */}
      <h1>
        School dashboard
      </h1>
    </div>
  )
}

// holds rules for in-line styling
const styles = StyleSheet.create({
  appHeader : {
    // width: '100%',
    paddingLeft: 10,
    color: 'rgb(229, 8, 8)',
    alignItems: 'center',
    justifyContent: 'left',
    display: 'flex',
    fontSize: '1.2em',
  },
  appLogo2: {
    maxHeight: '25vh',
    minWidth: '18vw',   
  }
})

export default Header