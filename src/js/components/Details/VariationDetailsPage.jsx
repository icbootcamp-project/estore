import React from "react";
import { string } from "prop-types";

const VariationComponent = props => (
  <div className="to-display-two-things variation-options-div">
    <div>{props.text}</div>
    <div>arrow-div</div>
  </div>
);

VariationComponent.propTypes = {
  text: string.isRequired
};
export default VariationComponent;
