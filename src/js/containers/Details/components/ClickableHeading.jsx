import React, { Fragment } from "react";

import PriceButton from "./PriceButton";

import VariationDetailsPage from "./VariationDetailsPage";

import ClickableHeadingSingleComponent from "./ClickableHeadingSingleComponent";
import array from "./detailsAppData";

export default class ClickableHeading extends React.Component {
  constructor() {
    super();
    this.state = { data: array, goto: "Details" };
  }

  clickIt = i => {
    const { data } = this.state;
    const changedData = data.map((item, index) => {
      if (index === i) {
        item.isActive = true;
        this.setState({
          goto: item.text
        });
      } else {
        item.isActive = false;
      }
      return item;
    });

    this.setState({
      data: changedData
    });
  };

  render() {
    const mapDataToRender = this.state.data.map((item, index) => (
      <ClickableHeadingSingleComponent
        item={item}
        isActive={item.isActive}
        key={item.text}
        clickFunction={() => this.clickIt(index)}
      />
    ));
    return (
      <Fragment>
        <div className="clickable-headings-outer-div">{mapDataToRender}</div>
        {(this.state.goto === "Details" && (
          <Fragment>
            <div className="clickable-description-div">
              description div is present here and it will be routed either to
              details or to reviews according to situation or according to the
              click
            </div>
            {/* THIS IS VARIATION COMPONENT WHERE OPTIONS CAN BE SELECTED */}
            <div className="to-display-two-things border-line-between-options">
              <VariationDetailsPage {...this.props} text="Size:" />
              <VariationDetailsPage {...this.props} text="Shape:" />
            </div>

            {/* HERE border-line-between-options class IS COPED WITH THE border1 id IN VariationDetailsPage TO
              GET THE FUNCTIONALITY OF THE LINE BETWEEN THE VARIATION OPTIONS AND ITS CSS IS WRITTEN IN
               variationOptions.scss */}
            <div className="to-display-two-things border-line-between-options">
              <VariationDetailsPage {...this.props} text="Variation:" />
              <VariationDetailsPage {...this.props} text="More varitation:" />
            </div>
            {/* THIS PORTION IS FOR THE LOWER BODY OF DETAILS PAGE  */}
            <div className="full-outer-div">
              <div className="outer-details-div">
                <div className="details">
                  <PriceButton isOpen isImage value="PKR: 250 Rs" />
                </div>
                <div className="details">
                  <PriceButton isOpen isImage value="PKR: 250 Rs" />
                </div>
                <div className="details">
                  <PriceButton isOpen isImage value="PKR: 250 Rs" />
                </div>
                {/* <Payment /> */}
              </div>
              <div className="details">
                <PriceButton isOpen value="Add to Cart" />
              </div>
              <div className="clear" />
            </div>
          </Fragment>
        )) || (
          <div className="clickable-description-div">
            review div
            {/*
          YOU HAVE TO WRITE THE WHOLE PORTION OF REVIEW_PORTION OF THE DETAILS PAGE IN HERE */}
          </div>
        )}
      </Fragment>
    );
  }
}
