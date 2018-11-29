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
    <label className="modal-selection-text" htmlFor={item}>
      <div>{item}</div>

      <input
        className="modal-div-radio-buttons"
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
        <div className="to-display-two-things upper-portion-modal-div">
          <p className="modal-div-heading">select your size</p>
          <button
            type="button"
            className="close close-button-for-modal"
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
