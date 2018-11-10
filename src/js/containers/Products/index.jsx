import React, { Component, Fragment } from "react";

import Filterproduct from "./components/FilterProduct";
import Item from "./components/Item";
import ProductItems from "./data";

export default class Products extends Component {

  static propTypes = {
  }

  renderItems = () => (
    ProductItems.map((item) => <Item key={item.id} item={item} />)
  )

  render() {
    return (
      <Fragment>
        <Filterproduct />
        <div id="product-container">
          {this.renderItems()}
        </div>
      </Fragment>
    )
  }
};
