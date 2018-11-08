// ########## Import Dependencies Here ##########
import { put, call } from 'redux-saga/effects';

// ########## Import Components Here ##########
import * as actions from '../actions';
import * as api from '../api';

export default function* loadCartSaga() {
	yield put(actions.loadCartAttempt());
	try {
		const data = yield call(api.cartDataResponse);
		yield put(actions.loadCartSuccess(data));
	} catch (err) {
		yield put(actions.loadCartFail(err));
	}
}
