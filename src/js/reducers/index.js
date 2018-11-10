// ########## Import Dependencies Here ##########
import { combineReducers } from 'redux';

// ########## Import Reducers Here ##########
<<<<<<< HEAD
import headerReducer from './headerReducer';
import categoriesReducer from '../containers/Home/reducers/categoriesReducer';
import subCategoriesGalleryReducer from '../containers/Home/reducers/subCategoriesGalleryReducer';
import footerReducer from './footerReducer';
import deliveryData from './getDeliveryReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
	headerReducer,
	categoriesReducer,
	subCategoriesGalleryReducer,
	footerReducer,
	deliveryData,
	cartReducer
=======
import headerReducer from "./headerReducer";
import categoriesReducer from "./categoriesReducer";
import subCategoriesGalleryReducer from "./subCategoriesGalleryReducer";
import footerReducer from "./footerReducer";
import deliveryData from "./getDeliveryReducer";
import productsReducer from "./productsReducer";

import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  headerReducer,
  categoriesReducer,
  subCategoriesGalleryReducer,
  footerReducer,
  deliveryData,
  productsReducer,
  cartReducer
>>>>>>> 562046f5103cf0a60ee53bb6ed6e24ad3cd75646
});

export default rootReducer;
