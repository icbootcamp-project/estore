import { call } from 'redux-saga/effects';
import * as api from '../api';

function* saveFormSaga(action) {
  const formData = action.payload;
  const response = yield call(api.postForm, formData);
  const user = response.data;
  localStorage.setItem('id', user.id);
  localStorage.setItem('token', user.token);
}

export default saveFormSaga;
