// ########## Import Components Here ##########
import * as types from "../constants";

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

// ########## Import Categories Actions Here ##########
export function loadCategories() {
  return {
    type: types.LOAD_CATEGORIES
  };
}

export function loadCategoriesAttempt() {
  return {
    type: types.LOAD_CATEGORIES_ATTEMPT
  };
}

export function loadCategoriesSuccess(data) {
  return {
    type: types.LOAD_CATEGORIES_SUCCESS,
    payload: data
  };
}

export function loadCategoriesFail(error) {
  return {
    type: types.LOAD_CATEGORIES_FAIL,
    payload: error
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
    payload: data
  };
}

export function loadProductsFail(error) {
  return {
    type: types.LOAD_PRODUCTS_FAIL,
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
