// ########## Import Dependencies Here ##########
import React, { Fragment } from "react";
import { arrayOf, shape, func } from "prop-types";
import { connect } from "react-redux";

// ########## Import Components Here ##########
import * as actions from "../actions";
import CartItem from "./CartItem";

const Cart = props => {
  function renderCart() {
    const { cart, addCounter, lessCounter } = props;

    return cart.map(item => (
      <CartItem
        cartItem={item}
        key={item.cartItemId}
        addCounter={addCounter}
        lessCounter={lessCounter}
      />
    ));
  }
  return (
    <Fragment>
      <div className="cart">
        <div id="cart-item">{renderCart()}</div>

        <div className="bill">
          <hr />
          <div className="bill-detail">
            <h4>Sub-total:</h4>
            <h4>Rs:</h4>
            <h4>3,104.00</h4>
          </div>
          <div className="tax">
            <h4>GST @ 17%:</h4>
            <h4>Rs:</h4>
            <h4>527.68</h4>
          </div>
          <hr className="half-hr" />
          <div className="total">
            <h4>Total:</h4>
            <h4>Rs:</h4>
            <h4>3,631.68</h4>
          </div>
          <div className="checkout">
            <div className="txt">Checkout</div>
          </div>
          <h4>I wanna get more stuff, please...</h4>
        </div>
      </div>
    </Fragment>
  );
};

function mapStateToProps({ cartReducer }) {
  return {
    counter: cartReducer
  };
}

Cart.propTypes = {
  cart: arrayOf(shape()).isRequired,
  addCounter: func.isRequired,
  lessCounter: func.isRequired
};

export default connect(
  mapStateToProps,
  { addCounter: actions.addCounter, lessCounter: actions.lessCounter }
)(Cart);