/**
 * Renders the footer component of the application.
 *
 * @return {JSX.Element} The footer component.
 */

import React from 'react'
import { StyleSheet, css } from 'aphrodite';
import { getFooterCopy } from '../utils/utils';
import './Footer.css'

function Footer() {
  return (
    <>
      <hr className={css([styles.hr])}/>
      <p>
        {getFooterCopy(true)}
      </p>
    </>
  )
}

// for in-line styling
const styles = StyleSheet.create({
  hr : {
    border: '2px solid rgb(229, 8, 8)',
  }
})

export default Footer