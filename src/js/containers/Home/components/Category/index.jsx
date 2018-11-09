// ########## Import Dependencies Here ##########
import React, { Component, Fragment } from "react";
import { shape, string, func } from "prop-types";

// ########## Import Components Here ##########

class Category extends Component {

  constructor() {
    super();
    this.handleSelect = this.handleSelect.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleSelect() {
    const { category, switchCategoriesActive } = this.props;
    switchCategoriesActive(category);
  }

  handleKeyPress(e) {
    const { category, switchCategoriesActive } = this.props;
<<<<<<< HEAD
    if (e.key === 'Enter') {
=======
    if(e.key === 'Enter') {
>>>>>>> 0a3c2a25f5f38e6fcab2b020a99a0aed6f2419ca
      switchCategoriesActive(category);
    }
  }

  render() {
    const { category } = this.props;
    return (
      <Fragment>
<<<<<<< HEAD
        <div
          onClick={this.handleSelect}
          className={`category-name ${category.isActive ? "underline" : ""}`}
          role="button"
=======
        <div 
          onClick={this.handleSelect} 
          className={`category-name ${category.isActive ? "underline" : ""}`} 
          role="button" 
>>>>>>> 0a3c2a25f5f38e6fcab2b020a99a0aed6f2419ca
          tabIndex="0"
          onKeyPress={this.handleKeyPress}
        >
          {category.name.toUpperCase()}
        </div>
      </Fragment>
    );
  }
};

Category.propTypes = {
  category: shape({
    name: string.isRequired
  }).isRequired,
  switchCategoriesActive: func.isRequired
};

export default Category;
