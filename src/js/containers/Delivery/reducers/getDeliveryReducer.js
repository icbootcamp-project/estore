import * as types from "../constants";
import deliveryFields from "../data";

const initial = {
  data: [],
  isLoading: false,
  error: null
};
export default function(state = initial, action) {
  switch (action.type) {
    case types.GET_DELIVERY_DATA_ATTEMPT:
      return { ...state, isLoading: true, error: null };
    case types.GET_DELIVERY_DATA_SUCCESS:
      return { ...state, isLoading: false, data: deliveryFields , error: null };
    case types.GET_DELIVERY_DATA_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
