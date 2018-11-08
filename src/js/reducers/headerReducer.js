// ########## Import Components Here ##########
import * as types from "../constants";

const initial = {
  isLoading: false,
  error: null,
  data: {
    icons: [
      {
        iconId: "",
        iconName: "",
        iconPosition: "",
        iconPath: "",
        iconBadgeCount: 0
      },
      {
        iconId: "",
        iconName: "",
        iconPosition: "",
        iconPath: "",
        iconBadgeCount: 0
      },
      {
        iconId: "",
        iconName: "",
        iconPosition: "",
        iconPath: "",
        iconBadgeCount: 0
      },
      {
        iconId: "",
        iconName: "",
        iconPosition: "",
        iconPath: "",
        iconBadgeCount: 0
      }
    ],
    logo: {
      logoPath: ""
    }
  }
};

export default function(state = initial, action) {
  let data;

  switch (action.type) {
    case types.LOAD_HEADER_ATTEMPT:
      return { ...state, isLoading: true };
    case types.LOAD_HEADER_SUCCESS:
      data = action.payload;
      return { ...state, data, isLoading: false, error: null };
    case types.LOAD_HEADER_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
