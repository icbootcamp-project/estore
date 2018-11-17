import React, { Component, Fragment } from "react";
// import { arrayOf, shape } from "prop-types";

// import Categories from "../Categories";
import Filterproduct from "./FilterProduct";
import Item from "./Item";
import ProductItems from "./data";

export default class Products extends Component {

  // static propTypes = {
  //   categories: arrayOf(shape({})).isRequired
  // }

  renderItems = () => (
    ProductItems.map((item) => <Item key={item.id} item={item} />)
  )

  render() {
    // const { categories } = this.props;
    return (
      <Fragment>
        {/* <Categories categories={categories} /> */}
        <Filterproduct />
        <div id="product-container">
          {this.renderItems()}
        </div>
      </Fragment>
    )
  }
};
