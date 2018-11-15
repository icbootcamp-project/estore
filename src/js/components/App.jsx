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
// import Cart from "./Cart/Cart";
import Header from "./Header";
import Footer from "./Footer";
import Details from "./Details";

export class App extends Component {
  static propTypes = {
    loadHeader: func.isRequired,
    loadCart: func.isRequired,
    loadFooter: func.isRequired,
    header: shape().isRequired,
    footer: shape().isRequired
    // cart: array,
    // categories: array
  };

  static defaultProps = {};

  componentDidMount() {
    const { loadHeader, loadFooter, loadCart } = this.props;
    loadHeader();
    loadCart();
    loadFooter();
  }

  render() {
    const { header, footer } = this.props;
    return (
      <Router>
        <div className="app">
          <Header header={header} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/delivery" component={Delivery} />
            <Route exact path="/confirmation" component={Confirmation} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/products" render={() => <Products />} />
            <Redirect to="/" />
          </Switch>
          <Footer footer={footer} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ headerReducer, cartReducer, footerReducer }) {
  return {
    header: headerReducer.data,
    cart: cartReducer.data,
    footer: footerReducer.data
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      loadHeader: actions.loadHeader,
      loadCart: actions.loadCart,
      loadFooter: actions.loadFooter
    }
  )(App)
);
