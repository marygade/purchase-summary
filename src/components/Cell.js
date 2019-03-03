import React from "react";
import PickupTooltip from "./PickupTooltip";
import PropTypes from "prop-types";

Cell.propTypes = {
  labelName: PropTypes.string,
  value: PropTypes.string.isRequired,
  highlight: PropTypes.bool,
  tooltipDescription: PropTypes.shape({
    message: PropTypes.string,
    position: PropTypes.string
  }),
  children: PropTypes.any
};

export default function Cell({
  labelName,
  value,
  highlight = false,
  tooltipDescription,
  children
}) {
  return (
    <div className="cell">
      <span className="labelName-div">
        <span
          className="labelName"
          style={
            tooltipDescription ? { position: "absolute", cursor: "pointer" } : {}
          }
        >
          {labelName ? labelName : null}
          {tooltipDescription ? <PickupTooltip {...tooltipDescription} /> : null}
        </span>
        {children}
      </span>
      <span className={`value ${highlight ? "highlight" : ""}`}>{value}</span>
    </div>
  );
}
