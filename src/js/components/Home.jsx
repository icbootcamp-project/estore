// ########## Import Dependencies Here ##########
import React, { Fragment } from "react";
import { arrayOf, shape } from "prop-types";

// ########## Import Components Here ##########
import Header from "./Header";
import Categories from "./Categories";
import SubCategoriesGallery from "./SubCategoriesGallery";
import Footer from "./Footer";

const Home = props => {
  const { header, categories, subCategoriesGallery, footer } = props;
  return (
    <Fragment>
      <Header header={header} />
      <Categories categories={categories} />
      <SubCategoriesGallery subCategoriesGallery={subCategoriesGallery} />
      <Footer footer={footer} />
    </Fragment>
  );
};

Home.propTypes = {
  header: shape().isRequired,
  categories: arrayOf(shape()).isRequired,
  subCategoriesGallery: arrayOf(shape()).isRequired,
  footer: shape().isRequired
};

export default Home;
