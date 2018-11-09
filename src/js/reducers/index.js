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
=======
import headerReducer from "./headerReducer";
import categoriesReducer from "../containers/Home/reducers/categoriesReducer";
import subCategoriesGalleryReducer from "../containers/Home/reducers/subCaterogiesGalleryReducer";
import footerReducer from "./footerReducer";
import deliveryData from "./getDeliveryReducer";
>>>>>>> 0a3c2a25f5f38e6fcab2b020a99a0aed6f2419ca

const rootReducer = combineReducers({
	headerReducer,
	categoriesReducer,
	subCategoriesGalleryReducer,
	footerReducer,
	deliveryData,
	cartReducer
});

export default rootReducer;
