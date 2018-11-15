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
    if(e.key === 'Enter') {
      switchCategoriesActive(category);
    }
  }

  render() {
    const { category } = this.props;
    return (
      <Fragment>
        <div 
          onClick={this.handleSelect} 
          className={`category-name ${category.isActive ? "underline" : ""}`} 
          role="button" 
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
