// ########## Import Components Here ##########
import * as types from "../constants";
import appData from '../../../components/appData';

const initial = {
  isLoading: false,
  error: null,
  data: appData[1]
};

export default function (state = initial, action) {
  let data;
  // let length;
  const mappedData = [];

  switch (action.type) {
    case types.LOAD_CATEGORIES_ATTEMPT:
      return { ...state, isLoading: true };
    case types.LOAD_CATEGORIES_SUCCESS:
      data = action.payload;
      return { ...state, data, isLoading: false, error: null };
    case types.LOAD_CATEGORIES_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    case types.SWITCH_CATEGORIES_ACTIVE:
      state.data.forEach(item => {
        if (item.id === action.payload.id) {
          if (!item.isActive) {
            item.isActive = !item.isActive;
            mappedData.push(item)
          }
        } else {
          item.isActive = false;
          mappedData.push(item);
        }
      })
      return { ...state, data: mappedData, isLoading: false, error: null };
    // case types.SWITCH_CATEGORIES_LEFT:
    //   let { length } = state.data
    //   console.log(length);
    //   if (action.payload === 750) {
        
    //   }
    //   if (length < 0) {
    //     state.data.splice(-1);
    //   }
    default:
      return state;
  }
}
