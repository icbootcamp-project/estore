import * as types from '../constants';

const initial = {
  isLoading: false,
  error: null,
  data: {}
};

export default function(state = initial, action) {
  let data;

  switch (action.type) {
    case types.FETCH_STUDENTS_ATTEMPT:
      return { ...state, isLoading: true };
    case types.FETCH_STUDENTS_SUCCESS:
      data = action.payload;
      return { ...state, data, isLoading: false, error: null };
    case types.FETCH_STUDENTS_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}

