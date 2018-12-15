// ########## Import Dependencies Here ##########
import React, { Fragment } from 'react';
import { shape } from 'prop-types';
import { Link } from 'react-router-dom';

// ########## Import Components Here ##########

const GalleryItem = (props) => {
  const { galleryItem } = props;
  return (
    <Fragment>
      <Link to={galleryItem.link}>
        <div className="gallery-item">
          <div className={`gallery-item-frame-${galleryItem.subCategoriesGalleryId.slice(12)}`}>
            <div className="gallery-item-overlay">
              <h3 className="gallery-item-heading">{galleryItem.subCategoryName}</h3>
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

GalleryItem.propTypes = {
  galleryItem: shape().isRequired,
};

export default GalleryItem;
