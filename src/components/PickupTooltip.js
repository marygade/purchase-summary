import React, { Component } from "react";
import PropTypes from "prop-types";

class PickupTooltip extends Component {
  constructor() {
    super();
    this.state = {
      showTooltip: false
    };
    this.hideTooltip = this.hideTooltip.bind(this);
  }
  hideTooltip() {
    this.setState({ showTooltip: false });
  }
  componentDidMount() {
    document.body.addEventListener("click", this.hideTooltip);
  }
  componentWillUnmount() {
    document.body.removeEventListener("click", this.hideTooltip);
  }
  render() {
    const { message, position } = this.props;
    return (
      <span className="tooltip">
        {this.state.showTooltip && (
          <div className={`tooltip-popup tooltip-${position}`}>
            <div className="tooltip-message">{message}</div>
          </div>
        )}
        <a
          className="tooltip-click"
          onClick={() => this.setState({ showTooltip: true })}
        >
          Pickup Savings
        </a>
      </span>
    );
  }
}

PickupTooltip.propTypes = {
  message: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};

export default PickupTooltip;