// ########## Import Components Here ##########
import * as types from "../constants";

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

export function switchCategoriesRight(data) {
  return {
    type: types.SWITCH_CATEGORIES_RIGHT,
    payload: data
  }
}

export function switchCategoriesLeft(data) {
  return {
    type: types.SWITCH_CATEGORIES_LEFT,
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
