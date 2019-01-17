import React from 'react';
import { string, func } from 'prop-types';
// import { func } from "prop-types";

const VariationComponent = (props) => {
  const { text, showModal } = props;
  return (
    <div onClick={showModal} id="border1" className="to-display-two-things variation-options-div " role="none">
      <div>{text}</div>
      <div>
        <i className="fas fa-chevron-down fa-lg" />
      </div>
    </div>
  );
};

VariationComponent.propTypes = {
  text: string.isRequired,
  showModal: func.isRequired,
};
export default VariationComponent;
