// ########## Import Dependencies Here ##########
import { combineReducers } from 'redux';

// ########## Import Reducers Here ##########
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
	cartReducer
});

export default rootReducer;
