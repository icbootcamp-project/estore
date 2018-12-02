// ########## Import Dependencies Here ##########
import React, { Fragment } from 'react';
import { arrayOf, shape } from 'prop-types';

// ########## Import Components Here ##########
import GalleryItem from './GalleryItem';

const Gallery = (props) => {
  function renderGalleryItems() {
    const { galleryItems } = props;
    return galleryItems.map((item) => <GalleryItem galleryItem={item} key={item.subCategoriesGalleryId} />);
  }

  return (
    <Fragment>
      <div id="gallery">{renderGalleryItems()}</div>
    </Fragment>
  );
};

Gallery.propTypes = {
  galleryItems: arrayOf(shape()).isRequired,
};

export default Gallery;
