import { takeLatest, fork, all } from 'redux-saga/effects';
import * as types from '../constants';
import testSaga from './testSaga';

function* watchTest() {
  yield takeLatest(types.TEST_ACTION, testSaga);
}

export default function* rootSaga() {
  yield all([
    fork(watchTest),
    // another action listener,
  ]);
}
