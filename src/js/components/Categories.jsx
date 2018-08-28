// ########## Import Dependencies Here ##########
import React, { Fragment } from "react";
import { arrayOf, shape } from "prop-types";

// ########## Import Components Here ##########
import Category from "./Category";

const Categories = props => {
  function renderCategories() {
    const { categories } = props;
    return categories.map(item => <Category key={item.id} category={item} />);
  }

  return (
    <Fragment>
      <div id="categories">
        <div className="category-item">
          <img
            className="left-arrow"
            src="/img/categories/arrow.png"
            alt="left arrow"
          />
          {renderCategories()}
          <img
            className="right-arrow"
            src="/img/categories/arrow.png"
            alt="left arrow"
          />
        </div>
      </div>
    </Fragment>
  );
};

Categories.propTypes = {
  categories: arrayOf(shape()).isRequired
};

export default Categories;
