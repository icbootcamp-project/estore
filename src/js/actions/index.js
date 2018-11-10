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
// ########## Import Products Actions Here ##########
export function loadProducts() {
  return {
    type: types.LOAD_PRODUCTS
  };
}

export function loadProductsAttempt() {
  return {
    type: types.LOAD_PRODUCTS_ATTEMPT
  };
}

export function loadProductsSuccess(data) {
  return {
    type: types.LOAD_PRODUCTS_SUCCESS,
    payload:data
  }
}
export function loadProductsFail(error) {
  return {
    type: types.LOAD_PRODUCTS_FAIL,
    payload: error
  };
}
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
<<<<<<< HEAD
	return {
		type: 'LESS_COUNTER',
		payload: item
	};
=======
  return {
    type: "LESS_COUNTER",
    payload: item
  };
>>>>>>> 562046f5103cf0a60ee53bb6ed6e24ad3cd75646
}
