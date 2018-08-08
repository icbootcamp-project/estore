// ########## Import Dependencies Here ##########
import { takeLatest, fork, all } from "redux-saga/effects";

// ########## Import Components Here ##########
import * as types from "../constants";
import loadHeaderSaga from "./loadHeaderSaga";
import loadCategoriesSaga from "./loadCategoriesSaga";
import loadSubCategoriesGallerySaga from "./loadSubCategoriesGallerySaga";

function* watchLoadHeader() {
  yield takeLatest(types.LOAD_HEADER, loadHeaderSaga);
}

function* watchLoadCategories() {
  yield takeLatest(types.LOAD_CATEGORIES, loadCategoriesSaga);
}

function* watchLoadSubCategoriesGallery() {
  yield takeLatest(
    types.LOAD_SUB_CATEGORIES_GALLERY,
    loadSubCategoriesGallerySaga
  );
}

export default function* rootSaga() {
  yield all([
    fork(watchLoadHeader),
    fork(watchLoadCategories),
    fork(watchLoadSubCategoriesGallery)
  ]);
}
