// ########## Import Dependencies Here ##########
import React, { Component } from "react";
import { connect } from "react-redux";
import { func,shape,arrayOf} from "prop-types";

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
import Header from "./Header";
import Footer from "./Footer";

export class App extends Component {
  static propTypes = {
    loadHeader: func.isRequired,
    loadCategories: func.isRequired,
    switchCategoriesActive: func.isRequired,
    loadSubCategoriesGallery: func.isRequired,
    loadFooter: func.isRequired,
    header:shape().isRequired,
    footer:shape().isRequired,
    categories: arrayOf(shape({})).isRequired
  };

  static defaultProps = {};
  // <Confirmation {...this.props} />
  componentDidMount() {
    const {
      loadHeader,
      loadCategories,
      loadSubCategoriesGallery,
      loadFooter
    } = this.props;
    loadHeader();
    loadCategories();
    loadSubCategoriesGallery();
    loadFooter();
  }

  render() {
    const { header, footer } = this.props;
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
  footerReducer
}) {
  return {
    header: headerReducer.data,
    categories: categoriesReducer.data,
    subCategoriesGallery: subCategoriesGalleryReducer.data,
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
      loadFooter: actions.loadFooter
    }
  )(App)
);
