// ########## Import Dependencies Here ##########
import {
  combineReducers
} from "redux";

// ########## Import Reducers Here ##########
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
});

export default rootReducer;