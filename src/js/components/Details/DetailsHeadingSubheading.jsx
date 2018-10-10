import React, { Fragment } from "react";

import PriceButton from "../Details/PriceButton";
// THIS IS THE MOCK DATA GIVEN SO THAT IT COULD BE SENT THROUGH PROPS
const data = { heading: "Pasta", subheading: "FOOD > PASTA & NOODLES" };
const { heading, subheading } = data;
// ////////////////////////////////////////////////////////////
const DetailsHeadingSubheading = () => (
  <Fragment>
    <div className="details-wrapper-div">
      <div className="details-text-portion">
        <div>{heading}</div>
        <div>{subheading}</div>
      </div>
      <div className="details-rate-flag-portion">
        <div className="details">
          <PriceButton color="blue" value="PKR: 250 Rs" />
        </div>
        <div className="clear" />
      </div>
    </div>
  </Fragment>
);

export default DetailsHeadingSubheading;
