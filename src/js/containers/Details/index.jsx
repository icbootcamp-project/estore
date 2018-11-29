import React, { Fragment /* , Component */ } from "react";

// import Payment from "../Payment/Payment";

import DetailsHeadingSubheading from "./components/DetailsHeadingSubheading";
import ClickableHeading from "./components/ClickableHeading";
import DetailsModalDiv from "./components/DetailsModalDiv";

class Details extends React.Component {
  state = { isModal: false };
  showModal = () => {
    this.setState({ isModal: true });
  };
  closeModal = () => {
    this.setState({ isModal: false });
  };
  render() {
    const { isModal } = this.state;
    return (
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

        {/* {THIS PORTION IS FOR THE DETAILS MODAL DIV TO BE APPEARED HERE} */}

        {isModal && <DetailsModalDiv closeModal={this.closeModal} />}

        {/* THIS PORTION IS FOR THE CLICKABLE HEADINGS SO THAT THERE ROUUTING COULD BE DONE */}

        <ClickableHeading showModal={this.showModal} />
      </Fragment>
    );
  }
}

export default Details;
