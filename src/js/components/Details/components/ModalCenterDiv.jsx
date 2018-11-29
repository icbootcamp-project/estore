import React from "react";
import { func } from "prop-types";

// import ModalCenterDiv from 'Details/ModalCenterDiv'
const array = [
  "small",
  "large",
  "extra-large",
  "extreme-large",
  "veryMuch Extra large"
];
const renderData = array.map(item => (
  <div key={array.indexOf(item)}>
    <label
      style={{
        lineHeight: "50px",
        width: "500px",
        display: "flex",
        justifyContent: "space-between",
        borderTop: "1px solid",
        padding: "0 20px"
      }}
      htmlFor={item}
    >
      <div>{item}</div>

      <input
        style={{ width: "50px", height: "50px" }}
        type="radio"
        id={item}
        name="drone"
        value={item}
      />
    </label>
  </div>
));
class ModalCenterDiv extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { closeModal } = this.props;
    return (
      <div className="center-component-for-modal-details">
        <div
          className="to-display-two-things"
          style={{ padding: "0 20px", lineHeight: "50px" }}
        >
          <p style={{ textAlign: "center", width: "100%" }}>select your size</p>
          <button
            type="button"
            className="close"
            style={{ height: "50px", width: "50px" }}
            aria-label="Close"
            onClick={closeModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form>{renderData}</form>
      </div>
    );
  }
}

ModalCenterDiv.propTypes = {
  closeModal: func.isRequired
};
export default ModalCenterDiv;
