// ########## Import Dependencies Here ##########
import { combineReducers } from "redux";

// ########## Import Reducers Here ##########
import headerReducer from "./headerReducer";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import footerReducer from "./footerReducer";

const rootReducer = combineReducers({
  headerReducer,
  categoriesReducer,
  productsReducer,
  footerReducer
});

export default rootReducer;
