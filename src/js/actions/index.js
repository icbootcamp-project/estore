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
