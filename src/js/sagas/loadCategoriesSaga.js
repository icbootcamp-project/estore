// ########## Import Dependencies Here ##########
import { put, call } from "redux-saga/effects";

// ########## Import Components Here ##########
import * as actions from "../actions";
import * as api from "../api";

export default function* loadCategoriesSaga() {
  yield put(actions.loadCategoriesAttempt());
  try {
    const data = yield call(api.categoriesResponse);
    yield put(actions.loadCategoriesSuccess(data));
  } catch (err) {
    yield put(actions.loadCategoriesFail(err));
  }
}
