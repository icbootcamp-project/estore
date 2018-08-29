// ########## Import Dependencies Here ##########
import { takeLatest, fork, all } from "redux-saga/effects";

// ########## Import Components Here ##########
import * as types from "../constants";
import loadHeaderSaga from "./loadHeaderSaga";
import loadCategoriesSaga from "./loadCategoriesSaga";
import loadProductsSaga from "./loadProductsSaga";

import loadFooterSaga from "./loadFooterSaga";

function* watchLoadHeader() {
  yield takeLatest(types.LOAD_HEADER, loadHeaderSaga);
}

function* watchLoadCategories() {
  yield takeLatest(types.LOAD_CATEGORIES, loadCategoriesSaga);
}



function* watchLoadProducts() {
  yield takeLatest(
    types.LOAD_PRODUCTS,
    loadProductsSaga
  );
}

function* watchLoadFooter() {
  yield takeLatest(types.LOAD_FOOTER, loadFooterSaga);
}

export default function* rootSaga() {
  yield all([
    fork(watchLoadHeader),
    fork(watchLoadCategories),
    fork(watchLoadProducts),
    fork(watchLoadFooter)
  ]);
}
