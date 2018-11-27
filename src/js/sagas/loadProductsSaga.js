// ########## Import Dependencies Here ##########
import { put, call } from "redux-saga/effects";

// ########## Import Components Here ##########
import * as actions from "../actions";
import * as api from "../api";

export default function* loadProductsSaga(){

	yield put(actions.loadProductsAttempt());

	try{
		const data = yield call(api.productsResponse);
		yield put(actions.loadProductsSuccess(data));
	} catch (err) {
		yield put(actions.loadProductsFailure(err));
	}

};