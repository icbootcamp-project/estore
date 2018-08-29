import React, { Fragment } from "react";
import { arrayOf, shape } from "prop-types";

// ########## Import Components Here ##########
import ProductItem from "./ProductItem";

const Products = props => {
  function renderProducts() {
    const { products } = props;
    return products.map(item => (
      <ProductItem
        productItem={item}
        key={item.productId}
      />
    ));
  }

  return (
    <Fragment>
      <div id="sub-category-gallery">{renderProducts()}</div>
    </Fragment>
  );
};

Products.propTypes = {
  products: arrayOf(shape()).isRequired
};

export default Products;