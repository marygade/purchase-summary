import React, { Component } from "react";
import PropTypes from "prop-types";

class Expander extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false
    };
  }
  render() {
    const { isClicked } = this.state;
    const { showLabel, hideLabel, children } = this.props;
    return (
      <div className="expander">
        <a
          onClick={() => this.setState({ isClicked: !isClicked })}
          className="title"
        >
          {isClicked ? hideLabel : showLabel}
          <span className="sign">{isClicked ? "-" : "+"}</span>
        </a>
        {isClicked ? children : null}
      </div>
    );
  }
}

Expander.propTypes = {
  showLabel: PropTypes.string.isRequired,
  hideLabel: PropTypes.string.isRequired,
  children: PropTypes.any
};

export default Expander;
