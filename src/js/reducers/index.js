// ########## Import Dependencies Here ##########
import { combineReducers } from "redux";

// ########## Import Reducers Here ##########
import headerReducer from "./headerReducer";
import footerReducer from "./footerReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
	headerReducer,
	footerReducer,
	cartReducer
});

export default rootReducer;
