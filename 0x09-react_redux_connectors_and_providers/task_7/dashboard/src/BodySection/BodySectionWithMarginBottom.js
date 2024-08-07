// BodySectionWithMarginBottom.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection'; // Make sure the path is correct
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends Component {
  render() {
    // Use the spread operator to pass all props to BodySection
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

// hold rules for in-line styling
const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
  }
})

// Define prop types
BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
}

export default BodySectionWithMarginBottom;
