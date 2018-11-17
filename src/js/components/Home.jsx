// ########## Import Dependencies Here ##########
import React, { Fragment } from "react";
import { arrayOf, shape, func } from "prop-types";

// ########## Import Components Here ##########

import Categories from "./Categories";
import SubCategoriesGallery from "./SubCategoriesGallery";

const Home = ({ categories, subCategoriesGallery, switchCategoriesActive, switchCategoriesRight, switchCategoriesLeft }) => (
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

Home.propTypes = {
  categories: arrayOf(shape()).isRequired,
  subCategoriesGallery: arrayOf(shape()).isRequired,
  switchCategoriesActive: func.isRequired,
  switchCategoriesRight: func.isRequired,
  switchCategoriesLeft: func.isRequired
};

export default Home;