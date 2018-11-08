// ########## Import Dependencies Here ##########
import React, { Fragment } from "react";
import { func, shape } from "prop-types";

const Counter = ({ cartItem, addCounter, lessCounter }) => (
  <Fragment>
    <div className="counter">
      <div className="qtn">
        <div className="quantity">{cartItem.cartItemQty}</div>
      </div>
      <div className="button">
        <button className="btn-add" onClick={() => addCounter(cartItem)}>
          ^
        </button>
        <button className="btn-less" onClick={() => lessCounter(cartItem)}>
          ^
        </button>
      </div>
    </div>
  </Fragment>
);

Counter.propTypes = {
  cartItem: shape().isRequired,
  addCounter: func.isRequired,
  lessCounter: func.isRequired
};

export default Counter;
