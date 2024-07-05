// BodySectionWithMarginBottom.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection'; // Make sure the path is correct
import './BodySectionWithMarginBottom.css';

class BodySectionWithMarginBottom extends Component {
  render() {
    // Use the spread operator to pass all props to BodySection
    return (
      <div className="bodySectionWithMargin">
        <BodySection {...this.props} />
      </div>
    );
  }
}

// Define prop types
BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
}

export default BodySectionWithMarginBottom;
