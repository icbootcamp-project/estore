import React from 'react';

import { bool, shape, func } from 'prop-types';

const ClickableHeadingSingleComponent = ({ item, isActive, clickFunction }) => (
  <div
    className={`clickable-headings-div ${isActive ? 'clickable-headings-div-if-active' : ''}`}
    onClick={clickFunction}
    // onKeyPress={clickableFunc[clickableArray.indexOf(item)]}
    role="none"
  >
    {item.text}
  </div>
);

ClickableHeadingSingleComponent.propTypes = {
  isActive: bool.isRequired,
  item: shape().isRequired,
  clickFunction: func.isRequired,
};

export default ClickableHeadingSingleComponent;
