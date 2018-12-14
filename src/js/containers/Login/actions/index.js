import LOGIN_DETAILS  from "../constants"; 

export default function userLoginDetails(name,value) {
	return {
		type: LOGIN_DETAILS,
		payload:{name,value}

	};
}