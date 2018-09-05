import React, { Fragment } from "react";
import { shape } from "prop-types";

// ########## Import Components Here ##########

const ProductItem = props => {
  const { productItem } = props;
  return (
    <Fragment>
      <div className="sub-category-item">
        <div
          className={`sub-category-item-frame-${productItem.productId.slice(
            8
          )}`}
        />
          
      </div>
    </Fragment>
  );
};

ProductItem.propTypes = {
  productItem: shape().isRequired
};

export default ProductItem;