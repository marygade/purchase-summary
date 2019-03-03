import React from "react";

import Cell from "./Cell";
import Expander from "./Expander";
import ProductDetails from "./ProductDetails";
import ApplyPromo from "./ApplyPromo";

class PurchaseSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product, savings, tax, discount } = this.props;
    const discountedPrice = discount ? (product.price * discount / 100) : null;
    const totalPrice = (product.price + tax - savings - discountedPrice);
    return (
      <div className="content">
        <div className="summary">
            <Cell labelName="Subtotal" value={"$" + this.props.product.price}>
          </Cell>
          <Cell
            tooltipDescription={{
              message:
                "Picking up your order helps cut costs and we pass the savings on to you",
              position: "bottom"
            }}
            value={"-$" + this.props.savings}
            highlight
          />
          <Cell labelName="Est. taxes & fees" value={"$" + this.props.tax}>
            <div className="labelName">(Based on {this.props.product.zipcode})</div>
          </Cell>
          {discount ? <Cell labelName="Discount" value={"-$" + discountedPrice.toFixed(2)} highlight /> : null}
        </div>
        <div className="total">
          <Cell
            labelName="Est. total"
            value={"$" + totalPrice.toFixed(2)}
          />
        </div>
        <Expander
          showLabel="See Item Details"
          hideLabel="Hide Item Details"
        >
          <ProductDetails {...product} />
        </Expander>
        <Expander
          showLabel="Apply promo code"
          hideLabel="Hide promo code"
        >
          <ApplyPromo />
        </Expander>
      </div>
    );
  }
}

export default PurchaseSummary;