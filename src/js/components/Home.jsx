// ########## Import Dependencies Here ##########
import React, { Fragment } from "react";
import { arrayOf, shape } from "prop-types";

// ########## Import Components Here ##########
import Header from "./Header";
import Cart from "./Cart";
import Footer from "./Footer";

const Home = props => {
  const { header, cart, footer } = props;
  return (
    <Fragment>
      <Header header={header} />

      <Cart cart={cart} />

      <Footer footer={footer} />
    </Fragment>
  );
};

Home.propTypes = {
  header: shape().isRequired,
  cart: arrayOf(shape()).isRequired,
  footer: shape().isRequired
};

export default Home;
