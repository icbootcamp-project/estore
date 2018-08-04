// ########## Import Dependencies Here ##########
import { takeLatest, fork, all } from "redux-saga/effects";

// ########## Import Components Here ##########
import * as types from "../constants";
import loadHeaderSaga from "./loadHeaderSaga";
import loadCategoriesSaga from "./loadCategoriesSaga";

function* watchLoadHeader() {
  yield takeLatest(types.LOAD_HEADER, loadHeaderSaga);
}

function* watchLoadCategories() {
  yield takeLatest(types.LOAD_CATEGORIES, loadCategoriesSaga);
}

export default function* rootSaga() {
  yield all([fork(watchLoadHeader), fork(watchLoadCategories)]);
}
