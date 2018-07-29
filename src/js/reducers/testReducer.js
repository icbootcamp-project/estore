import * as types from '../constants';

const initial = {
  isLoading: false,
  error: null,
  data: {}
};

export default function(state = initial, action) {
  let data;

  switch (action.type) {
    case types.TEST_ACTION_ATTEMPT:
      return { ...state, isLoading: true };
    case types.TEST_ACTION_SUCCESS:
      data = action.payload;
      return { ...state, data, isLoading: false, error: null };
    case types.TEST_ACTION_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}

