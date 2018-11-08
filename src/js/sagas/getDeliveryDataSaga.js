import { put, call } from "redux-saga/effects";
import { delay } from "redux-saga";
import * as actions from "../actions";
import * as api from "../api";

export default function* getDeliveryDataSaga() {
  yield put(actions.getDeliveryDataAttempt());
  yield call(delay, 1000);
  try {
    const data = yield call(api.deliveryDataApi);
    yield put(actions.getDeliveryDataSuccess(data));
  } catch (e) {
    yield put(actions.getDeliveryDataFail(e));
  }
}
