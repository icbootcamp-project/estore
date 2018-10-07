// ########## Import Dependencies Here ##########
import React, { Fragment } from "react";
import { arrayOf, shape } from "prop-types";

// ########## Import Components Here ##########
import Header from "./Header";
import Cart from "./Cart";
import Footer from "./Footer";

const Home = props => {
  const { header, cart, footer, categories, subCategoriesGallery } = props;
  return (
    <Fragment>
      <Header header={header} />
      <Categories categories={categories} />
      <SubCategoriesGallery subCategoriesGallery={subCategoriesGallery} />
      <Cart cart={cart} />

      <Footer footer={footer} />
    </Fragment>
  );
};

Home.propTypes = {
  header: shape().isRequired,
  cart: arrayOf(shape()).isRequired,
  footer: shape().isRequired,
  categories: arrayOf(shape()).isRequired,
  subCategoriesGallery: arrayOf(shape()).isRequired
};

export default Home;
