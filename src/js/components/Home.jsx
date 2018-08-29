// ########## Import Dependencies Here ##########
import React, { Fragment } from "react";
import { arrayOf, shape } from "prop-types";

// ########## Import Components Here ##########
import Header from "./Header";
import Categories from "./Categories";
import Products from "./Products";
import Footer from "./Footer";

const Home = props => {
  const { header, categories, products, footer } = props;
  return (
    <Fragment>
      <Header header={header} />
      <Categories categories={categories} />
      <Products products={products} />
      <Footer footer={footer} />
    </Fragment>
  );
};

Home.propTypes = {
  header: shape().isRequired,
  categories: arrayOf(shape()).isRequired,
  products: arrayOf(shape()).isRequired,
  footer: shape().isRequired
};

export default Home;
