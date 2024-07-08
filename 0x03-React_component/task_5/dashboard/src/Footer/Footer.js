/**
 * Renders the footer component of the application.
 *
 * @return {JSX.Element} The footer component.
 */

import React from 'react'
import { getFooterCopy } from '../utils/utils';
import './Footer.css'

function Footer() {
  return (
    <>
      <hr />
      <p>
        {getFooterCopy(true)}
      </p>
    </>
  )
}

export default Footer