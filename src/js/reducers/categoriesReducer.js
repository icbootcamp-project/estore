// ########## Import Components Here ##########
import * as types from "../constants";

const initial = {
  isLoading: false,
  error: null,
  data: [
    {
      id: "",
      name: ""
    }
  ]
};

export default function(state = initial, action) {
  let data;

  switch (action.type) {
    case types.LOAD_CATEGORIES_ATTEMPT:
      return { ...state, isLoading: true };
    case types.LOAD_CATEGORIES_SUCCESS:
      data = action.payload;
      return { ...state, data, isLoading: false, error: null };
    case types.LOAD_CATEGORIES_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
