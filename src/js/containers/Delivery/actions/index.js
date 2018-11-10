import * as types  from "../constants"; 

export function getDeliveryDataSuccess() {
	return {
		type: types.GET_DELIVERY_DATA_SUCCESS
	};
}
export function getDeliveryDataFail(err) {
	return {
		type: types.GET_DELIVERY_DATA_FAIL,
		payload: err
	};
}
export function getDeliveryDataAttempt() {
	return {
		type: types.GET_DELIVERY_DATA_ATTEMPT
	};
}
