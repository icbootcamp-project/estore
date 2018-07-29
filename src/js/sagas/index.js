import { takeLatest, fork, all } from 'redux-saga/effects';
import * as types from '../constants';
import fetchDataSaga from './fetchDataSaga';
import saveFormSaga from './saveFormSaga';
import fetchStudentsSaga from './fetchStudentsSaga';

function* watchFetchData() {
  yield takeLatest(types.FETCH_DATA, fetchDataSaga);
}

function* watchSaveForm() {
  yield takeLatest(types.SAVE_FORM, saveFormSaga);
}

function* watchFetchStudents() {
  yield takeLatest(types.FETCH_STUDENTS, fetchStudentsSaga);
}

export default function* rootSaga() {
  yield all([
    fork(watchFetchData),
    // another action listener,
    fork(watchSaveForm),
    fork(watchFetchStudents)
  ]);
}
