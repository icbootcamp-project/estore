// ########## Import Dependencies Here ##########
import { combineReducers } from 'redux';

// ########## Import Reducers Here ##########
import headerReducer from './headerReducer';
import categoriesReducer from '../containers/Home/reducers/categoriesReducer';
import subCategoriesGalleryReducer from '../containers/Home/reducers/subCategoriesGalleryReducer';
import footerReducer from './footerReducer';
import deliveryData from '../containers/Delivery/reducers/getDeliveryReducer';
import cartReducer from '../containers/Cart/reducers/cartReducer';
import loginDetails from '../containers/Login/reducers/loginReducer';
import signupDetails from '../containers/Signup/reducers/signupReducer';

const rootReducer = combineReducers({
	headerReducer,
	categoriesReducer,
	subCategoriesGalleryReducer,
	footerReducer,
	deliveryData,
	cartReducer,
	loginDetails,
	signupDetails
});

export default rootReducer;
