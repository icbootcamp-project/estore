// ########## Import Dependencies Here ##########
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { func, object } from "prop-types";

// ########## Import Components Here ##########
import * as actions from "./actions";
import Cart from './components/Cart'

export class CartIndex extends Component {
  static propTypes = {
    loadCart: func.isRequired,
    addCounter: func.isRequired,
    lessCounter: func.isRequired,
    cart: object.isRequired
  };

  static defaultProps = {};

  componentDidMount() {
    const { loadCart } = this.props;
    loadCart();
  }

  render() {
    const {cart, addCounter, lessCounter} = this.props;
    return (
      <Fragment>
        <div className="cart">
         <Cart cart={cart} addCounter={addCounter} lessCounter={lessCounter} />
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ cartReducer }) {
  return {
    cart: cartReducer,
  };
}

export default connect(
    mapStateToProps,
    {
      loadCart: actions.loadCartSuccess,
      addCounter: actions.addCounter,
      lessCounter: actions.lessCounter
    }
  )(CartIndex);
