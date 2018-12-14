import LOGIN_DETAILS from "../constants";

const initial = {
  email:"",
  password:"",
  error:""
};
export default function(state = initial, action) {
  switch (action.type) {
    case LOGIN_DETAILS:
      const { name , value } = action.payload;
      const newState = {...state};
      newState[name] = value;
      return { ...newState}
    default:
      return state;
  }
}
