import React, { Fragment /* , Component */ } from 'react';
import { arrayOf, shape, func } from 'prop-types';
import { connect } from 'react-redux';
// import Payment from "../Payment/Payment";

import * as actions from '../Home/actions';
import DetailsHeadingSubheading from './components/DetailsHeadingSubheading';
import ClickableHeading from './components/ClickableHeading';
import DetailsModalDiv from './components/DetailsModalDiv';
import Categories from '../../commons/Categories/Categories';

class Details extends React.Component {
  state = { isModal: false };
  showModal = () => {
    this.setState({ isModal: true });
  };
  closeModal = () => {
    this.setState({ isModal: false });
  };
  render() {
    const { isModal } = this.state;
    const {
      categories,
      // subCategoriesGallery,
      switchCategoriesActive,
      switchCategoriesRight,
      switchCategoriesLeft,
    } = this.props;
    return (
      <Fragment>
        <Categories
          categories={categories}
          switchCategoriesActive={switchCategoriesActive}
          switchCategoriesRight={switchCategoriesRight}
          switchCategoriesLeft={switchCategoriesLeft}
        />
        {/* THIS PORTION IS FOR THE IMAGE OF THE DETAILS PAGE  */}
        <div className="upper-body-details">
          <div className="image-backgound-details-div">
            <img
              className="pasta-image-details-page"
              src="./img/products-page-details/pasta-noodles.jpg"
              alt="search icon"
            />
          </div>
        </div>

        {/* {THIS PORTION IS FOR THE DETAILS HEADINGS AND SUBHEADINGS} */}

        <DetailsHeadingSubheading />

        {/* {THIS PORTION IS FOR THE DETAILS MODAL DIV TO BE APPEARED HERE} */}

        {isModal && <DetailsModalDiv closeModal={this.closeModal} />}

        {/* THIS PORTION IS FOR THE CLICKABLE HEADINGS SO THAT THERE ROUUTING COULD BE DONE */}

        <ClickableHeading showModal={this.showModal} />
      </Fragment>
    );
  }
}

Details.propTypes = {
  categories: arrayOf(shape()).isRequired,
  // subCategoriesGallery: arrayOf(shape()).isRequired,
  switchCategoriesActive: func.isRequired,
  switchCategoriesRight: func.isRequired,
  switchCategoriesLeft: func.isRequired,
};

const mapStateToProps = ({
  categoriesReducer,
  // subCategoriesGalleryReducer
}) => ({
  categories: categoriesReducer.data,
  // subCategoriesGallery: subCategoriesGalleryReducer.data,
});

export default connect(
  mapStateToProps,
  {
    // loadCategories: actions.loadCategories,
    switchCategoriesActive: actions.switchCategoriesActive,
    switchCategoriesRight: actions.switchCategoriesRight,
    switchCategoriesLeft: actions.switchCategoriesLeft,
    // loadSubCategoriesGallery: actions.loadSubCategoriesGallery,
  }
)(Details);
