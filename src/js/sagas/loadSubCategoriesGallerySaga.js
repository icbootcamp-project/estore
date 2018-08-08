// ########## Import Dependencies Here ##########
import { put, call } from "redux-saga/effects";

// ########## Import Components Here ##########
import * as actions from "../actions";
import * as api from "../api";

export default function* loadSubCategoriesGallerySaga() {
  yield put(actions.loadSubCategoriesGalleryAttempt());
  try {
    const data = yield call(api.subCategoriesGalleryResponse);
    yield put(actions.loadSubCategoriesGallerySuccess(data));
  } catch (err) {
    yield put(actions.loadSubCategoriesGalleryFail(err));
  }
}
