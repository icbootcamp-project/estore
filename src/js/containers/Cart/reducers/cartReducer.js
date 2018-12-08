import * as types from '../constants';
import cartData from '../cartData';

const initial = {
	isLoading: false,
	error: null,
	cartItemDisplayPrice: 0,
	cartItemTotalPrice: 0,
	// GST17: 0,
	delivery: 200,
	data: cartData

	// [
	// 	{
	// 		cartItemId: "",
	// 		cartItemImage: "",
	// 		cartItemName: "",
	// 		cartItemSize: "",
	// 		cartItemQty: 0,
	// 		cartItemValue: 0,

	// 	}
	// ]
};

export default function(state = initial, action) {
	let data;

	switch (action.type) {
		case types.LOAD_CART_ATTEMPT:
			return { ...state, isLoading: true };

		case types.LOAD_CART_SUCCESS:
			data = state;
			const amountsR = [];
			data.data.forEach((item) => amountsR.push(item.cartItemValue));
			const totalerR = (total, currentValue) => total + currentValue;
			const totalAmountR = amountsR.reduce(totalerR);
			// const GSTR = (totalAmountR * 17) / 100
			return { ...state, cartItemTotalPrice: totalAmountR, isLoading: false, error: null };

		// return { ...state, data, cartItemTotalPrice: totalAmountR, GST17: GSTR, isLoading: false, error: null };
		case types.LOAD_CART_FAIL:
			return { ...state, isLoading: false, error: action.payload };

		case types.ADD_COUNTER:
			const newDataAdd = state.data.filter((item) => item.cartItemId === action.payload.cartItemId)[0];
			const mapIdAdd = state.data.map((item) => item.cartItemId);
			const indexAdd = mapIdAdd.indexOf(action.payload.cartItemId);
			const newItemAdd = { ...newDataAdd, cartItemQty: newDataAdd.cartItemQty + 1 };
			const newItemFinalAdd = {
				...newItemAdd,
				cartItemDisplayPrice: newItemAdd.cartItemQty * newDataAdd.cartItemValue
			};
			state.data.splice(indexAdd, 1, newItemFinalAdd);
			const amounts = [];
			state.data.forEach((item) => amounts.push(item.cartItemDisplayPrice));
			const totaler = (total, currentValue) => total + currentValue;
			const totalAmount = amounts.reduce(totaler) + state.delivery;

			// const GST = (totalAmount * 17) / 100
			return {
				...state,
				cartItemTotalPrice: totalAmount
				// GST17: GST
			};

		case types.LESS_COUNTER:
			const newDataLess = state.data.filter((item) => item.cartItemId === action.payload.cartItemId)[0];
			const mapIdLess = state.data.map((item) => item.cartItemId);
			const indexLess = mapIdLess.indexOf(action.payload.cartItemId);
			if (newDataLess.cartItemQty > 1) {
				const newItemLess = {
					...newDataLess,
					cartItemQty: newDataLess.cartItemQty - 1,
					cartItemDisplayPrice: newDataLess.cartItemQty * newDataLess.cartItemValue
				};
				const newItemFinalLess = {
					...newItemLess,
					cartItemDisplayPrice: newItemLess.cartItemQty * newDataLess.cartItemValue
				};
				state.data.splice(indexLess, 1, newItemFinalLess);
				const amountsL = [];
				state.data.forEach((item) => amountsL.push(item.cartItemDisplayPrice));
				const totalerL = (total, currentValue) => total + currentValue;
				const totalAmountL = amountsL.reduce(totalerL) + state.delivery;
				// const GSTL = (totalAmountL * 17) / 100
				return {
					...state,
					cartItemTotalPrice: totalAmountL
					// GST17: GSTL
				};
			}
			return state;
		case types.DEL_ITEM:
			const newData = state.data.filter((item) => item.cartItemId !== action.payload.cartItemId);

			if (newData.length) {
				const amountsN = [];
				newData.forEach((item) => amountsN.push(item.cartItemDisplayPrice));
				const totaleN = (total, currentValue) => total + currentValue;
				const totalAmountN = amountsN.reduce(totaleN) + state.delivery;
				return { ...state, data: newData, cartItemTotalPrice: totalAmountN };
			}
			return {...state, data:newData,cartItemTotalPrice: 0, delivery:0}
		default:
			return state;
	}
}
