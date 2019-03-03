import React from "react";
import PropTypes from "prop-types";

ProductDetails.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};

export default function ProductDetails({ img, title, price, quantity, description }) {
  return (
    <div className="product-expander">
      <img src={img} />
      <div className="product-details">
        <div className="product-title">{title}</div>
        <div className="product-price">{"$"+price}</div>
        <div className="product-quantity">Qty: {quantity}</div>
        <div className="product-description">{description}</div>
      </div>
    </div>
  );
}
