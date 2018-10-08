// ########## Import Dependencies Here ##########
import React, { Fragment } from "react";
import { shape, string } from "prop-types";

// ########## Import Components Here ##########

const Category = props => {
  const { category } = props;
  return (
    <Fragment>
      <div className={`category-name ${category.isActive ? "underline" : ""}`}>
        {category.name.toUpperCase()}
      </div>
    </Fragment>
  );
};

Category.propTypes = {
  category: shape({
    name: string.isRequired
  }).isRequired
};

export default Category;
