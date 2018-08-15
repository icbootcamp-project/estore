// ########## Import Dependencies Here ##########
import { put, call } from "redux-saga/effects";

// ########## Import Components Here ##########
import * as actions from "../actions";
import * as api from "../api";

export default function* loadHeaderSaga() {
  yield put(actions.loadHeaderAttempt());
  try {
    const data = yield call(api.headerResponse);
    yield put(actions.loadHeaderSuccess(data));
  } catch (err) {
    yield put(actions.loadHeaderFail(err));
  }
}
