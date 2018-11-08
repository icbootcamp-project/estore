// ########## Import Dependencies Here ##########
import React, { Component } from "react";
import { connect } from "react-redux";
import { func, shape, arrayOf } from "prop-types";
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
import Home from "./Home";
import Confirmation from "./Confirmation/Confirmation";
import Delivery from "./Delivery/Delivery";
import Payment from "./Payment/Payment";
import Products from "./Products/Products";
import Cart from "./Cart/Cart"
import Header from "./Header";
import Footer from "./Footer";

export class App extends Component {
  static propTypes = {
    loadHeader: func.isRequired,
    loadCategories: func.isRequired,
    switchCategoriesActive: func.isRequired,
    loadSubCategoriesGallery: func.isRequired,
    loadCart: func.isRequired,
    loadFooter: func.isRequired,
    header: shape().isRequired,
    footer: shape().isRequired,
    cart: arrayOf(shape({})).isRequired,
    categories: arrayOf(shape({})).isRequired
  };

  static defaultProps = {};
  // <Confirmation {...this.props} />
  componentDidMount() {
    const {
      loadHeader,
      loadCategories,
      loadSubCategoriesGallery,
      loadFooter,
      loadCart
    } = this.props;
    loadHeader();
    loadCategories();
    loadSubCategoriesGallery();
    loadCart();
    loadFooter();
  }

  render() {
    const { header, footer, cart } = this.props;
    return (
      <Router>
        <div className="app">
          <Header header={header} />
          <Switch>
            <Route exact path="/" render={() => <Home {...this.props} />} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/delivery" component={Delivery} />
            <Route exact path="/confirmation" component={Confirmation} />
            <Route exact path="/products" render={() => <Products categories={this.props.categories} />} />
            <Route exact path="/cart" render={() => <Cart cart={cart} />} />
            <Redirect to="/" />
          </Switch>
          <Footer footer={footer} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps({
  headerReducer,
  categoriesReducer,
  subCategoriesGalleryReducer,
  cartReducer,
  footerReducer
}) {
  return {
    header: headerReducer.data,
    categories: categoriesReducer.data,
    subCategoriesGallery: subCategoriesGalleryReducer.data,
    cart: cartReducer.data,
    footer: footerReducer.data
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      loadHeader: actions.loadHeader,
      loadCategories: actions.loadCategories,
      switchCategoriesActive: actions.switchCategoriesActive,
      loadSubCategoriesGallery: actions.loadSubCategoriesGallery,
      loadCart: actions.loadCart,
      loadFooter: actions.loadFooter
    }
  )(App)
);
