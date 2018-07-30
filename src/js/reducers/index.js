// ########## Import Dependencies Here ##########
import { combineReducers } from "redux";

// ########## Import Reducers Here ##########
import headerReducer from "./headerReducer";

const rootReducer = combineReducers({
  headerReducer
});

export default rootReducer;
