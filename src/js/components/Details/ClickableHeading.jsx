import React, { Fragment } from "react";

const clickableArray = ["Details", "Review"];
const mapDataToRender = clickableArray.map(item => (
  <div className="clickable-headings-div" key={clickableArray.indexOf(item)}>
    {item}
  </div>
));
const ClickableHeading = () => (
  <Fragment>
    <div className="clickable-headings-outer-div">{mapDataToRender}</div>
    <div className="clickable-description-div">
      description div is present here and it will be routed either to details or
      to reviews according to situation or according to the click
    </div>
  </Fragment>
);
export default ClickableHeading;
