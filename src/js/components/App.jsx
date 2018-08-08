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
    loadSubCategoriesGallery: func.isRequired
  };

  static defaultProps = {};

  componentDidMount() {
    const { loadHeader, loadCategories, loadSubCategoriesGallery } = this.props;
    loadHeader();
    loadCategories();
    loadSubCategoriesGallery();
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
  subCategoriesGalleryReducer
}) {
  return {
    header: headerReducer.data,
    categories: categoriesReducer.data,
    subCategoriesGallery: subCategoriesGalleryReducer.data
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      loadHeader: actions.loadHeader,
      loadCategories: actions.loadCategories,
      loadSubCategoriesGallery: actions.loadSubCategoriesGallery
    }
  )(App)
);
