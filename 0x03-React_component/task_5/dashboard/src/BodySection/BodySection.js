import React, { Component } from "react";
import Proptypes from "prop-types";
import './BodySection.css';

class BodySection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, children } = this.props;

    <div className="bodySection">
      <h2>{title}</h2>
      {children}
    </div>
  }
}

BodySection.Proptypes = {
  title: Proptypes.string
}

BodySection.defaultProps = {
  title: ""
}

export default BodySection