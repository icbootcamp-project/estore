import React, { Fragment /* , Component */ } from "react";

// import Payment from "../Payment/Payment";

import PriceButton from "../Details/PriceButton";
import DetailsHeadingSubheading from "../Details/DetailsHeadingSubheading";
import ClickableHeading from "../Details/ClickableHeading";
import VariationDetailsPage from "../Details/VariationDetailsPage";
// import DetailsModalDiv from "../Details/DetailsModalDiv";

const Details = () => (
  <Fragment>
    {/* THIS PORTION IS FOR THE IMAGE OF THE DETAILS PAGE  */}
    <div className="upper-body-details">
      <div className="image-backgound-details-div">
        <img
          className="pasta-image-details-page"
          src="./img/products-page-details/pasta-noodles.jpg"
          alt="search icon"
        />
      </div>
    </div>

    {/* {THIS PORTION IS FOR THE DETAILS HEADINGS AND SUBHEADINGS} */}

    <DetailsHeadingSubheading />

    {/* THIS PORTION IS FOR THE CLICKABLE HEADINGS SO THAT THERE ROUUTING COULD BE DONE */}

    <ClickableHeading />

    {/* THIS IS VARIATION COMPONENT WHERE OPTIONS CAN BE SELECTED */}
    <div className="to-display-two-things">
      <VariationDetailsPage text="Size:" />
      <VariationDetailsPage text="Shape:" />
    </div>
    {/* <DetailsModalDiv /> */}
    <div className="to-display-two-things">
      <VariationDetailsPage text="Variation:" />
      <VariationDetailsPage text="More varitation:" />
    </div>

    {/* THIS PORTION IS FOR THE LOWER BODY OF DETAILS PAGE  */}
    <div className="full-outer-div">
      <div className="outer-details-div">
        <div className="details">
          <PriceButton color="#f5a219" isOpen isImage value="PKR: 250 Rs" />
        </div>
        <div className="details">
          <PriceButton color="#c52f2f" isOpen isImage value="PKR: 250 Rs" />
        </div>
        <div className="details">
          <PriceButton color="#45c34d" isOpen isImage value="PKR: 250 Rs" />
        </div>
        {/* <Payment /> */}
      </div>
      <div className="details">
        <PriceButton color="#f5de46" isOpen value="Add to Cart" />
      </div>
      <div className="clear" />
    </div>
  </Fragment>
);

export default Details;
