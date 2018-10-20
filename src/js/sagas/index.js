// ########## Import Dependencies Here ##########
import {
  takeLatest,
  fork,
  all
} from "redux-saga/effects";

// ########## Import Components Here ##########
import * as types from "../constants";
import loadHeaderSaga from "./loadHeaderSaga";
import loadCategoriesSaga from "./loadCategoriesSaga";
import loadSubCategoriesGallerySaga from "./loadSubCategoriesGallerySaga";
import loadFooterSaga from "./loadFooterSaga";
import getDeliveryDataSaga from "./getDeliveryDataSaga";
import loadProductsSaga from "./loadProductsSaga";
import loadCartSaga from "./loadCartSaga";

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

function* watchGetDeliveryData() {
  yield takeLatest(types.GET_DELIVERY_DATA, getDeliveryDataSaga);
}
function* watchLoadProducts() {
  yield takeLatest(types.LOAD_PRODUCTS, loadProductsSaga);
}

function* watchLoadCart() {
  yield takeLatest(types.LOAD_CART, loadCartSaga);
}

export default function* rootSaga() {
  yield all([
    fork(watchLoadHeader),
    fork(watchLoadCategories),
    fork(watchLoadSubCategoriesGallery),
    fork(watchLoadFooter),
    fork(watchGetDeliveryData),
    fork(watchLoadProducts),
    fork(watchLoadCart),
  ]);
}