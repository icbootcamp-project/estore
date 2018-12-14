import SIGNUP_DETAILS from "../constants";

const initial = {
  firstname:"",
  lastname:"",
  email:"",
  password:"",
  repassword:"",
  error:""
};
export default function(state = initial, action) {
  switch (action.type) {
    case SIGNUP_DETAILS:
      const { name , value } = action.payload;
      const newState = {...state};
      newState[name] = value;
      return { ...newState}
    default:
      return state;
  }
}
