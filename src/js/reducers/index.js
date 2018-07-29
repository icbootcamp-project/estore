import { combineReducers } from 'redux';
import fetchDataReducer from './fetchDataReducer';
import fetchStudentsReducer from './fetchStudentsReducer';

const rootReducer = combineReducers({
  data: fetchDataReducer,
  students: fetchStudentsReducer
});

export default rootReducer;
