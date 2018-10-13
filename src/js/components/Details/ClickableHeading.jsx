import React, { Fragment } from "react";

export default class ClickableHeading extends React.Component {
  constructor() {
    super();
    this.state = {
      detailsIsOpen: true
    };
  }
  render() {
    const clickableArray = ["Details", "Review"];
    const mapDataToRender = clickableArray.map(item => (
      <div
        className="clickable-headings-div"
        key={clickableArray.indexOf(item)}
      >
        {item}
      </div>
    ));
    return (
      <Fragment>
        <div className="clickable-headings-outer-div">{mapDataToRender}</div>
        {this.state.detailsIsOpen ? (
          <div className="clickable-description-div">
            description div is present here and it will be routed either to
            details or to reviews according to situation or according to the
            click
          </div>
        ) : null}
      </Fragment>
    );
  }
}
// const clickableArray = ["Details", "Review"];
// const mapDataToRender = clickableArray.map(item => (
//   <div className="clickable-headings-div" key={clickableArray.indexOf(item)}>
//     {item}
//   </div>
// ));
// const ClickableHeading = () => (
//   <Fragment>
//     <div className="clickable-headings-outer-div">{mapDataToRender}</div>
//     {this.state.detailsIsOpen ? <div className="clickable-description-div">
//       description div is present here and it will be routed either to details or
//       to reviews according to situation or according to the click
//     </div>}
//   </Fragment>
// );
