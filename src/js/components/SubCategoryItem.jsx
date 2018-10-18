// ########## Import Dependencies Here ##########
import React, { Fragment } from "react";
import { shape } from "prop-types";
import { Link } from 'react-router-dom';

// ########## Import Components Here ##########

const SubCategoryItem = props => {
  const { subCategoryItem } = props;
  return (
    <Fragment>
      <Link to={subCategoryItem.link}>
        <div className="sub-category-item">
          <div
            className={`sub-category-item-frame-${subCategoryItem.subCategoriesGalleryId.slice(
              12
            )}`}
          >
            <div className="sub-category-item-overlay">
              <h3 className="sub-category-item-heading">
                {subCategoryItem.subCategoryName}
              </h3>
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

SubCategoryItem.propTypes = {
  subCategoryItem: shape().isRequired
};

export default SubCategoryItem;
