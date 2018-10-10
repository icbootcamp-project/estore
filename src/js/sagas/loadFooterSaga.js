// ########## Import Dependencies Here ##########
import { put, call } from "redux-saga/effects";

// ########## Import Components Here ##########
import * as actions from "../actions";
import * as api from "../api";

export default function* loadFooterSaga() {
  yield put(actions.loadFooterAttempt());
  try {
    const data = yield call(api.footerResponse);
    yield put(actions.loadFooterSuccess(data));
  } catch (err) {
    yield put(actions.loadFooterFail(err));
  }
}
