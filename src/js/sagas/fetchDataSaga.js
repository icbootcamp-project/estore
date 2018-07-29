import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';
import * as api from '../api';

export default function* fetchDataSaga(action) {
  const { query } = action.payload;
  yield put(actions.fetchDataAttempt());
  yield call(delay, 1000);
  try {
    const data = yield call(api.youtube, query);
    yield put(actions.fetchDataSuccess(data));
  } catch (e) {
    yield put(actions.fetchDataFail(e));
  }
}
