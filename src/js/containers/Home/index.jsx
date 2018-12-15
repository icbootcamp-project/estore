// ########## Import Dependencies Here ##########
import React, { Component, Fragment } from 'react';
import { arrayOf, shape, func } from 'prop-types';
import { connect } from 'react-redux';

// ########## Import Components Here ##########
import * as actions from './actions';
import Categories from '../../commons/Categories/Categories';
import Gallery from '../../commons/ProductsGallery/Gallery';

class Home extends Component {
  componentDidMount() {}

  render() {
    const {
      categories,
      subCategoriesGallery,
      switchCategoriesActive,
      switchCategoriesRight,
      switchCategoriesLeft,
    } = this.props;
    return (
      <Fragment>
        <Categories
          categories={categories}
          switchCategoriesActive={switchCategoriesActive}
          switchCategoriesRight={switchCategoriesRight}
          switchCategoriesLeft={switchCategoriesLeft}
        />
        <Gallery galleryItems={subCategoriesGallery} />
      </Fragment>
    );
  }
}

Home.propTypes = {
  categories: arrayOf(shape()).isRequired,
  subCategoriesGallery: arrayOf(shape()).isRequired,
  switchCategoriesActive: func.isRequired,
  switchCategoriesRight: func.isRequired,
  switchCategoriesLeft: func.isRequired,
};

const mapStateToProps = ({ categoriesReducer, subCategoriesGalleryReducer }) => ({
  categories: categoriesReducer.data,
  subCategoriesGallery: subCategoriesGalleryReducer.data,
});

export default connect(
  mapStateToProps,
  {
    loadCategories: actions.loadCategories,
    switchCategoriesActive: actions.switchCategoriesActive,
    switchCategoriesRight: actions.switchCategoriesRight,
    switchCategoriesLeft: actions.switchCategoriesLeft,
    loadSubCategoriesGallery: actions.loadSubCategoriesGallery,
  }
)(Home);
