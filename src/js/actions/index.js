// ########## Import Components Here ##########
import * as types from '../constants';

// ########## Import Header Actions Here ##########
export function loadHeader() {
	return {
		type: types.LOAD_HEADER
	};
}

export function loadHeaderAttempt() {
	return {
		type: types.LOAD_HEADER_ATTEMPT
	};
}

export function loadHeaderSuccess(data) {
	return {
		type: types.LOAD_HEADER_SUCCESS,
		payload: data
	};
}

export function loadHeaderFail(error) {
	return {
		type: types.LOAD_HEADER_FAIL,
		payload: error
	};
}

// ########## Import Footer Gallery Actions Here ##########
export function loadFooter() {
	return {
		type: types.LOAD_FOOTER
	};
}

export function loadFooterAttempt() {
	return {
		type: types.LOAD_FOOTER_ATTEMPT
	};
}

export function loadFooterSuccess(data) {
	return {
		type: types.LOAD_FOOTER_SUCCESS,
		payload: data
	};
}

export function loadFooterFail(error) {
	return {
		type: types.LOAD_FOOTER_FAIL,
		payload: error
	};
}

export function getDeliveryData() {
	return {
		type: types.GET_DELIVERY_DATA
	};
}
export function getDeliveryDataSuccess(data) {
	return {
		type: types.GET_DELIVERY_DATA_SUCCESS,
		payload: data
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
