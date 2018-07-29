import { put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api';

export default function* fetchStudentsSaga(action) {
  yield put(actions.fetchStudentsAttempt());
  try {
    const response = yield call(api.getStudents);
    yield put(actions.fetchStudentsSuccess(response.data));
  } catch (e) {
    yield put(actions.fetchStudentsFail(e));
  }
}
