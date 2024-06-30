/**
 * Renders the header component of the application (App).
 *
 * @return {JSX.Element} The JSX element representing the header.
 */

import React from 'react'
import '../Header.css'
import MyLogo from '../assets/holberton-logo-PNG.png'

function Header() {
  return (
    <>
      <img src={MyLogo} className="App-logo2" alt="logo" />
      {/* <div className="App-logo"></div> */}
      <h1>
        School dashboard
      </h1>
    </>
  )
}

export default Header