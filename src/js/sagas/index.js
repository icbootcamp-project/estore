// ########## Import Dependencies Here ##########
import { takeLatest, fork, all } from 'redux-saga/effects';

// ########## Import Components Here ##########
import * as types from '../constants';
import loadHeaderSaga from './loadHeaderSaga';
import loadFooterSaga from './loadFooterSaga';
import getDeliveryDataSaga from './getDeliveryDataSaga';

function* watchLoadHeader() {
	yield takeLatest(types.LOAD_HEADER, loadHeaderSaga);
}

function* watchLoadFooter() {
	yield takeLatest(types.LOAD_FOOTER, loadFooterSaga);
}

function* watchGetDeliveryData() {
	yield takeLatest(types.GET_DELIVERY_DATA, getDeliveryDataSaga);
}

export default function* rootSaga() {
	yield all([
		fork(watchLoadHeader),
		fork(watchLoadFooter),
		fork(watchGetDeliveryData)
	]);
}
