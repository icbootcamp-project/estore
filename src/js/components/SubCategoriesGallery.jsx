// ########## Import Dependencies Here ##########
import React, { Fragment } from "react";
import { arrayOf, shape } from "prop-types";

// ########## Import Components Here ##########
import SubCategoryItem from "./SubCategoryItem";

const SubCategoriesGallery = props => {
  function renderSubCategories() {
    const { subCategoriesGallery } = props;
    return subCategoriesGallery.map(item => (
      <SubCategoryItem
        subCategoryItem={item}
        key={item.subCategoriesGalleryId}
      />
    ));
  }

  return (
    <Fragment>
      <div id="sub-category-gallery">{renderSubCategories()}</div>
    </Fragment>
  );
};

SubCategoriesGallery.propTypes = {
  subCategoriesGallery: arrayOf(shape()).isRequired
};

export default SubCategoriesGallery;
