import SIGNUP_DETAILS  from "../constants"; 

export default function updateSignupDetails(name,value) {
	return {
		type: SIGNUP_DETAILS,
		payload:{name,value}

	};
}