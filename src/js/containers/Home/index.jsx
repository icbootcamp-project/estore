// ########## Import Dependencies Here ##########
import React, { Component, Fragment } from "react";
import { arrayOf, shape, func } from "prop-types";
import { connect } from 'react-redux';

// ########## Import Components Here ##########
import * as actions from './actions';
import Categories from "./components/Categories";
import SubCategoriesGallery from "./components/SubCategoriesGallery";

class Home extends Component {
  componentDidMount() {

  };

  render() {
    const { categories, subCategoriesGallery, switchCategoriesActive, switchCategoriesRight, switchCategoriesLeft } = this.props;
    return (
      <Fragment>
        <Categories
          categories={categories}
          switchCategoriesActive={switchCategoriesActive}
          switchCategoriesRight={switchCategoriesRight}
          switchCategoriesLeft={switchCategoriesLeft}
        />
        <SubCategoriesGallery subCategoriesGallery={subCategoriesGallery} />
      </Fragment>
    );
  }
};

Home.propTypes = {
  categories: arrayOf(shape()).isRequired,
  subCategoriesGallery: arrayOf(shape()).isRequired,
  switchCategoriesActive: func.isRequired,
  switchCategoriesRight: func.isRequired,
  switchCategoriesLeft: func.isRequired
};

<<<<<<< HEAD
const mapStateToProps = ({ categoriesReducer, subCategoriesGalleryReducer }) => ({
=======
const mapStateToProps = ({ categoriesReducer, subCategoriesGalleryReducer, }) => ({
>>>>>>> 0a3c2a25f5f38e6fcab2b020a99a0aed6f2419ca
  categories: categoriesReducer.data,
  subCategoriesGallery: subCategoriesGalleryReducer.data,
});

export default connect(mapStateToProps,
  {
    loadCategories: actions.loadCategories,
    switchCategoriesActive: actions.switchCategoriesActive,
    switchCategoriesRight: actions.switchCategoriesRight,
    switchCategoriesLeft: actions.switchCategoriesLeft,
    loadSubCategoriesGallery: actions.loadSubCategoriesGallery,
  }
<<<<<<< HEAD
)(Home);
=======
)(Home);
>>>>>>> 0a3c2a25f5f38e6fcab2b020a99a0aed6f2419ca
