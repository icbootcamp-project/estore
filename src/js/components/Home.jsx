// ########## Import Dependencies Here ##########
import React, { Fragment } from "react";
import { arrayOf, shape } from "prop-types";

// ########## Import Components Here ##########

import Categories from "./Categories";
import SubCategoriesGallery from "./SubCategoriesGallery";

const Home = props => {
  const { categories, subCategoriesGallery } = props;
  return (
    <Fragment>
      <Categories categories={categories} />
      <SubCategoriesGallery subCategoriesGallery={subCategoriesGallery} />
    </Fragment>
  );
};

Home.propTypes = {
  categories: arrayOf(shape()).isRequired,
  subCategoriesGallery: arrayOf(shape()).isRequired
};

export default Home;
