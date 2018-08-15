// ########## Import Dependencies Here ##########
import { takeLatest, fork, all } from "redux-saga/effects";

// ########## Import Components Here ##########
import * as types from "../constants";
import loadHeaderSaga from "./loadHeaderSaga";
import loadCategoriesSaga from "./loadCategoriesSaga";
import loadSubCategoriesGallerySaga from "./loadSubCategoriesGallerySaga";
import loadFooterSaga from "./loadFooterSaga";

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

function* watchLoadFooter() {
  yield takeLatest(types.LOAD_FOOTER, loadFooterSaga);
}

export default function* rootSaga() {
  yield all([
    fork(watchLoadHeader),
    fork(watchLoadCategories),
    fork(watchLoadSubCategoriesGallery),
    fork(watchLoadFooter)
  ]);
}
