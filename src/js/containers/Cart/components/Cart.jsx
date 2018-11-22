// ########## Import Dependencies Here ##########
import React, { Fragment } from 'react';
import { object, func } from 'prop-types';

// ########## Import Components Here ##########
import CartItem from './CartItem';

const Cart = ({cart, addCounter, lessCounter}) => {
	function renderCart() {
		return cart.data.map(item => (
			<CartItem cartItem={item} key={item.cartItemId} addCounter={addCounter} lessCounter={lessCounter} />
		));
	}
	return (
		<Fragment>
			<div className='cart'>
				<div id='cart-item'>{renderCart()}</div>
				<div className='bill'>
					<hr />
					<div className='bill-detail'>
						<h4>Sub-total:</h4>
						<h4>Rs:</h4>
						<h4>{cart.cartItemTotalPrice.toFixed(2)}</h4>
					</div>
					<div className='tax'>
						<h4>GST @ 17%:</h4>
						<h4>Rs:</h4>
						<h4>{cart.GST17.toFixed(2)}</h4>
					</div>
					<hr className='half-hr' />
					<div className='total'>
						<h4>Total:</h4>
						<h4>Rs:</h4>
						<h4>{(cart.cartItemTotalPrice + cart.GST17).toFixed(2)} </h4>
					</div>
					<div className='checkout'>
						<div className='txt'>Checkout</div>
					</div>
					<h4>I wanna get more stuff, please...</h4>
				</div>
			</div>
		</Fragment>
	);
};


Cart.propTypes = {
	cart        : object.isRequired,
	addCounter  : func.isRequired,
	lessCounter : func.isRequired
};

export default Cart;
