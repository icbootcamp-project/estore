// ########## Import Dependencies Here ##########
import { combineReducers } from "redux";

// ########## Import Reducers Here ##########
import headerReducer from "./headerReducer";
import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
  headerReducer,
  categoriesReducer
});

export default rootReducer;
