// ########## Import Dependencies Here ##########
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { func } from "prop-types";
import {
  // BrowserRouter as Router,
  // Route,
  // Link,
  // Switch,
  withRouter
} from "react-router-dom";

// ########## Import Components Here ##########
import * as actions from "../actions";
import Home from "./Home";

export class App extends Component {
  static propTypes = {
    loadHeader: func.isRequired,
    loadCategories: func.isRequired,
    loadProducts: func.isRequired,
    loadFooter: func.isRequired
  };

  static defaultProps = {};

  componentDidMount() {
    const {
      loadHeader,
      loadCategories,
      loadProducts,
      loadFooter
    } = this.props;
    loadHeader();
    loadCategories();
    loadProducts();
    loadFooter();
  }

  render() {
    
    return (
      <Fragment>
        <div className="app">
          <Home {...this.props} />
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({
  headerReducer,
  categoriesReducer,
  productsReducer,
  footerReducer
}) {
  return {
    header: headerReducer.data,
    categories: categoriesReducer.data,
    products: productsReducer.data,
    footer: footerReducer.data
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      loadHeader: actions.loadHeader,
      loadCategories: actions.loadCategories,
      loadProducts: actions.loadProducts,
      loadFooter: actions.loadFooter,
    }
  )(App)
);
