import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ApplyPromo extends Component {
  constructor() {
    super();
    this.state = {
      promoCode: ""
    };
  }
  handleSubmit() {
    if (!this.state.promoCode) {
      alert("Promo code is required!");
      return;
    }
    if (this.state.promoCode.toUpperCase() !== "DISCOUNT") {
      alert("Invalid Promo code. Please try again!");
      return;
    }
    this.props.applyDiscount();
  }
  render() {
    const { promoCode } = this.state;
    return (
      <div className="promo-expander">
        <input
          value={promoCode}
          onChange={e => this.setState({ promoCode: e.target.value })}
        />
        <a onClick={() => this.handleSubmit()}>Apply</a>
      </div>
    );
  }
}

ApplyPromo.propTypes = {
  applyDiscount: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  applyDiscount: () => dispatch({ type: "DISCOUNT" })
});

export default connect(
  null,
  mapDispatchToProps
)(ApplyPromo);
