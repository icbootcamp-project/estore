// ########## Import Dependencies Here ##########
import { takeLatest, fork, all } from 'redux-saga/effects';

// ########## Import Components Here ##########
<<<<<<< HEAD
import * as types from '../constants';
import loadHeaderSaga from './loadHeaderSaga';
import loadFooterSaga from './loadFooterSaga';
import getDeliveryDataSaga from './getDeliveryDataSaga';
import loadCartSaga from './loadCartSaga';
=======
import * as types from "../constants";
import loadHeaderSaga from "./loadHeaderSaga";
import loadCategoriesSaga from "./loadCategoriesSaga";
import loadSubCategoriesGallerySaga from "./loadSubCategoriesGallerySaga";
import loadFooterSaga from "./loadFooterSaga";
import getDeliveryDataSaga from "./getDeliveryDataSaga";
import loadProductsSaga from "./loadProductsSaga";
import loadCartSaga from "./loadCartSaga";
>>>>>>> 562046f5103cf0a60ee53bb6ed6e24ad3cd75646

function* watchLoadHeader() {
	yield takeLatest(types.LOAD_HEADER, loadHeaderSaga);
}

function* watchLoadFooter() {
	yield takeLatest(types.LOAD_FOOTER, loadFooterSaga);
}

function* watchGetDeliveryData() {
	yield takeLatest(types.GET_DELIVERY_DATA, getDeliveryDataSaga);
}
function* watchLoadProducts() {
  yield takeLatest(types.LOAD_PRODUCTS, loadProductsSaga);
}

function* watchLoadCart() {
	yield takeLatest(types.LOAD_CART, loadCartSaga);
}

export default function* rootSaga() {
<<<<<<< HEAD
	yield all([
		fork(watchLoadHeader),
		fork(watchLoadFooter),
		fork(watchLoadCart),
		fork(watchGetDeliveryData)
	]);
}
=======
  yield all([
    fork(watchLoadHeader),
    fork(watchLoadCategories),
    fork(watchLoadSubCategoriesGallery),
    fork(watchLoadFooter),
    fork(watchGetDeliveryData),
    fork(watchLoadProducts),
    fork(watchLoadCart),
  ]);
}
>>>>>>> 562046f5103cf0a60ee53bb6ed6e24ad3cd75646
