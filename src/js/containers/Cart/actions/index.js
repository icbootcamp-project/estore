import * as types from '../constants';

// ########## Import Cart Actions Here ##########
export function loadCart() {
	return {
		type: types.LOAD_CART
	};
}

export function loadCartAttempt() {
	return {
		type: types.LOAD_CART_ATTEMPT
	};
}

export function loadCartSuccess(data) {
	return {
		type: types.LOAD_CART_SUCCESS,
		payload: data
	};
}

export function loadCartFail(error) {
	return {
		type: types.LOAD_CART_FAIL,
		payload: error
	};
}

// ########## Import Local Actions Here ##########
export function addCounter(item) {
	return {
		type: 'ADD_COUNTER',
		payload: item
	};
}

export function lessCounter(item) {
	return {
		type: 'LESS_COUNTER',
		payload: item
	};
}

export function delItem(item) {
	return {
		type: 'DEL_ITEM',
		payload: item
	};
}

