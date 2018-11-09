// ########## Import Dependencies Here ##########
import React, { Component } from "react";
import { connect } from "react-redux";
import { func, shape } from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch,
  withRouter,
  Redirect
} from "react-router-dom";

// ########## Import Components Here ##########
import * as actions from "../actions";
import Home from "../containers/Home";
import Confirmation from "./Confirmation/Confirmation";
import Delivery from "./Delivery/Delivery";
import Payment from "./Payment/Payment";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import Header from "./Header";
import Footer from "./Footer";

export class App extends Component {
  static propTypes = {
    loadHeader: func.isRequired,
<<<<<<< HEAD
    loadCart: func.isRequired,
    loadFooter: func.isRequired,
    header: shape().isRequired,
    footer: shape().isRequired,
    cart: arrayOf(shape({})).isRequired,
    categories: arrayOf(shape({})).isRequired
=======
    loadFooter: func.isRequired,
    header: shape().isRequired,
    footer: shape().isRequired,
>>>>>>> 0a3c2a25f5f38e6fcab2b020a99a0aed6f2419ca
  };

  static defaultProps = {};

  componentDidMount() {
    const {
      loadHeader,
<<<<<<< HEAD
      loadFooter,
      loadCart
    } = this.props;
    loadHeader();
    loadCart();
=======
      loadFooter
    } = this.props;
    loadHeader();
>>>>>>> 0a3c2a25f5f38e6fcab2b020a99a0aed6f2419ca
    loadFooter();
  }

  render() {
    const { header, footer, cart } = this.props;
    return (
      <Router>
        <div className="app">
          <Header header={header} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/delivery" component={Delivery} />
            <Route exact path="/confirmation" component={Confirmation} />
<<<<<<< HEAD
            <Route
              exact
              path="/products"
              render={() => <Products categories={this.props.categories} />}
            />
            <Route exact path="/cart" render={() => <Cart cart={cart} />} />
=======
            <Route exact path="/products" render={() => <Products />} />
>>>>>>> 0a3c2a25f5f38e6fcab2b020a99a0aed6f2419ca
            <Redirect to="/" />
          </Switch>
          <Footer footer={footer} />
        </div>
      </Router>
    );
  }
}

<<<<<<< HEAD
function mapStateToProps({ headerReducer, cartReducer, footerReducer }) {
  return {
    header: headerReducer.data,
    cart: cartReducer.data,
=======
function mapStateToProps({
  headerReducer,
  footerReducer
}) {
  return {
    header: headerReducer.data,
>>>>>>> 0a3c2a25f5f38e6fcab2b020a99a0aed6f2419ca
    footer: footerReducer.data
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      loadHeader: actions.loadHeader,
<<<<<<< HEAD
      loadCart: actions.loadCart,
=======
>>>>>>> 0a3c2a25f5f38e6fcab2b020a99a0aed6f2419ca
      loadFooter: actions.loadFooter
    }
  )(App)
);
