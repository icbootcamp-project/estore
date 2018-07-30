// ########## Import Dependencies Here ##########
import React, { Fragment } from "react";
import { shape } from "prop-types";

// ########## Import Components Here ##########
import Header from "./Header";
import Footer from "./Footer";

const Home = props => {
  const { header } = props;
  return (
    <Fragment>
      <Header header={header} />
      <Footer />
    </Fragment>
  );
};

Home.propTypes = {
  header: shape().isRequired
};

export default Home;
