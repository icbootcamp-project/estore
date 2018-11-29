import React from "react";

import { bool, shape, func } from "prop-types";

const ClickableHeadingSingleComponent = ({ item, isActive, clickFunction }) => (
  <div
    className="clickable-headings-div"
    style={
      //   this.state[
      //   Object.keys(this.state)[clickableArray.indexOf(item)]
      // ]

      (isActive && {
        color: "blue",
        borderStyle: "solid",
        borderWidth: "0 0 5px 0",
        borderColor: "blue"
      }) ||
      {}
    }
    // key={item.text}
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
  clickFunction: func.isRequired
};

export default ClickableHeadingSingleComponent;
