// ########## Import Dependencies Here ##########
import { combineReducers } from 'redux';

// ########## Import Reducers Here ##########
import headerReducer from './headerReducer';
import categoriesReducer from '../containers/Home/reducers/categoriesReducer';
import subCategoriesGalleryReducer from '../containers/Home/reducers/subCategoriesGalleryReducer';
import footerReducer from './footerReducer';
import deliveryData from '../containers/Delivery/reducers/getDeliveryReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
	headerReducer,
	categoriesReducer,
	subCategoriesGalleryReducer,
	footerReducer,
	deliveryData,
	cartReducer
});

export default rootReducer;
