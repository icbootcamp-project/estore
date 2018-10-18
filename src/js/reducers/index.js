// ########## Import Dependencies Here ##########
import { combineReducers } from "redux";

// ########## Import Reducers Here ##########
import headerReducer from "./headerReducer";
import categoriesReducer from "./categoriesReducer";
import subCategoriesGalleryReducer from "./subCategoriesGalleryReducer";
import footerReducer from "./footerReducer";
import deliveryData from "./getDeliveryReducer";
import productsReducer from "./productsReducer";


const rootReducer = combineReducers({
  headerReducer,
  categoriesReducer,
  subCategoriesGalleryReducer,
  footerReducer,
  deliveryData,
  productsReducer
});

export default rootReducer;
