// ########## Import Dependencies Here ##########
import { takeLatest, fork, all } from 'redux-saga/effects';

// ########## Import Components Here ##########
import * as types from '../constants';
import loadCartSaga from './loadCartSaga';

function* watchLoadCart() {
	yield takeLatest(types.LOAD_CART, loadCartSaga);
}

export default function* rootSaga() {
	yield all([ fork(watchLoadCart) ]);
}
