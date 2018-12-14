// ########## Import Dependencies Here ##########
import React, { Fragment } from "react";
import { arrayOf, shape, func } from "prop-types";

// ########## Import Components Here ##########
import Category from "./Category";

const Categories = ({ categories, switchCategoriesActive, switchCategoriesRight, switchCategoriesLeft }) => {

  function renderCategories() {
    if (window.innerWidth === 750) {
      return categories.slice(0, 5).map(item => <Category key={item.id} category={item} switchCategoriesActive={switchCategoriesActive} />);
    } else if (window.innerWidth < 749 && window.innerWidth > 320) {
      return categories.slice(0, 3).map(item => <Category key={item.id} category={item} switchCategoriesActive={switchCategoriesActive} />);
    }
    return categories.slice(0, 8).map(item => <Category key={item.id} category={item} switchCategoriesActive={switchCategoriesActive} />);
  }

  function handleClick(direction) {
    if (direction === "left") {
      switchCategoriesLeft(window.innerWidth);
    } else {
      switchCategoriesRight(window.innerWidth);
    }
  }

  // function handlePress(direction) {
  //   if (direction === "left") {
  //     switchCategoriesLeft();
  //   } else {
  //     switchCategoriesRight();
  //   }
  // }

  return (
    <Fragment>
      <div id="categories">
        <div className="category-item">
          <a
            role="button"
            tabIndex={0}
            onKeyPress={() => handleClick("left")}
            onClick={() => handleClick("left")}
          >
            <img
              className="left-arrow"
              src="/img/categories/arrow.png"
              alt="left arrow"
            // onKeyPress={handlePress("left")}
            />
          </a>
          <div className="category-items-container">
            {renderCategories()}
          </div>
          <a
            role="button"
            tabIndex={0}
            onKeyPress={() => handleClick("right")}
            onClick={() => handleClick("right")}
          >
            <img
              className="right-arrow"
              src="/img/categories/arrow.png"
              alt="left arrow"
            // onKeyPress={handlePress("right")}
            />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

Categories.propTypes = {
  categories: arrayOf(shape()).isRequired,
  switchCategoriesActive: func.isRequired,
  switchCategoriesRight: func.isRequired,
  switchCategoriesLeft: func.isRequired
};

export default Categories;
