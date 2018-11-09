// ########## Import Components Here ##########
import * as types from "../constants";
import appData from '../../../components/appData';

const initial = {
  isLoading: false,
  error: null,
  data: appData[2]
};

export default function(state = initial, action) {
  let data;

  switch (action.type) {
    case types.LOAD_SUB_CATEGORIES_GALLERY_ATTEMPT:
      return { ...state, isLoading: true };
    case types.LOAD_SUB_CATEGORIES_GALLERY_SUCCESS:
      data = action.payload;
      return { ...state, data, isLoading: false, error: null };
    case types.LOAD_SUB_CATEGORIES_GALLERY_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
