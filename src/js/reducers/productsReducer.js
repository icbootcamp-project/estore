// ########## Import Components Here ##########
import * as types from "../constants";

const initial = {
  isLoading: false,
  error: null,
  data: []
};

export default function(state = initial, action) {
  let data;

  switch (action.type) {
    case types.LOAD_PRODUCTS_ATTEMPT:
      return { ...state, isLoading: true };
    case types.LOAD_PRODUCTS_SUCCESS:
      data = action.payload;
      return { ...state, data, isLoading: false, error: null };
    case types.LOAD_PRODUCTS_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
