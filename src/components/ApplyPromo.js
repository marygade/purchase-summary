import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";


import { handleChange } from "../actions/promoCode";
import { handleSubmit } from "../actions/promoCodeApply";

class ApplyPromo extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e);
  }

  handleSubmit (e) {
    this.props.handleSubmit(e);
  }

  componentDidUpdate() {
    if (this.props.isPromoCodeApplied && (this.props.promoCode === ""))  {
      alert("Promo code is required!");
      return;
    }

    if (this.props.isPromoCodeApplied && !this.props.isPromoCodeValid) {
      alert("Wrong promo code! Please try again!");
      return;
    }

    if (this.props.isPromoCodeApplied && this.props.isPromoCodeValid) {
      alert("Promo code applied successfully!");
      return;
    }
  }

  render() {
    return (
      <div className="promo-expander">
        <input
          value={this.props.promoCode}
          onChange={e => this.handleChange(e)}
        />
        <a onClick={(e) => this.handleSubmit(e)}>Apply</a>
      </div>
    );
  }
}

ApplyPromo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => state.promo;
const mapDispatchToProps = {handleChange, handleSubmit};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplyPromo);
