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

export function switchCategoriesActive(data) {
  return {
    type: types.SWITCH_CATEGORIES_ACTIVE,
    payload: data
  }
}

// ########## Import Sub Categories Gallery Actions Here ##########
export function loadSubCategoriesGallery() {
  return {
    type: types.LOAD_SUB_CATEGORIES_GALLERY
  };
}

export function loadSubCategoriesGalleryAttempt() {
  return {
    type: types.LOAD_SUB_CATEGORIES_GALLERY_ATTEMPT
  };
}

export function loadSubCategoriesGallerySuccess(data) {
  return {
    type: types.LOAD_SUB_CATEGORIES_GALLERY_SUCCESS,
    payload: data
  };
}

export function loadSubCategoriesGalleryFail(error) {
  return {
    type: types.LOAD_SUB_CATEGORIES_GALLERY_FAIL,
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
    type: "ADD_COUNTER",
    payload: item
  };
}

export function lessCounter(item) {
  return {
    type: "LESS_COUNTER",
    payload: item
  };
}