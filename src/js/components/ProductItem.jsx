import React, { Fragment } from "react";
import { shape } from "prop-types";

// ########## Import Components Here ##########

const ProductItem = props => {
  const { productItem } = props;
  return (
    <Fragment>
      <div className="product-item">
        <div
          className={`product-item-frame-${productItem.productId.slice(
            8
          )}`}
        >
          <div className="product-item-overlay">
            <h3 className="sub-category-item-heading">
              {productItem.productName}
            </h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProductItem.propTypes = {
  productItem: shape().isRequired
};

export default ProductItem;