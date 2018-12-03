// ########## Import Dependencies Here ##########
import React, { Fragment } from 'react';
import { object, func } from 'prop-types';
import Button from '../../../commons/Button'

// ########## Import Components Here ##########
import CartItem from './CartItem';

const Cart = ({cart, addCounter,delItem , lessCounter}) => {
	function renderCart() {
		return cart.data.map(item => (
			<CartItem cartItem={item} delItem={delItem} key={item.cartItemId} addCounter={addCounter} lessCounter={lessCounter} />
		));
	}

	const btnStyle = {height:'50px',lineHeight:'50px'};
	return (
		 cart.data.length ? 
		<Fragment>
			<div className='cart'>
				<div id='cart-item'>{renderCart()}</div>
				<div className='bill'>
					<hr />
					<div className='bill-detail'>
						<h4>Sub-total:</h4>
						<h4>Rs:</h4>
						<h4>{cart.cartItemTotalPrice.toFixed(2)-cart.delivery}</h4>
					</div>
					<div className='tax'>
						<h4>Delivery Charges:</h4>
						<h4>Rs:</h4>
						<h4>{cart.delivery}</h4>
					</div>
					<hr className='half-hr' />
					<div className='total'>
						<h4>Total:</h4>
						<h4>Rs:</h4>
						<h4>{(cart.cartItemTotalPrice).toFixed(2)} </h4>
					</div>
					<div className='checkout'>
					<Button value="Checkout" style={btnStyle}/>

						{/* <div className='txt'>Checkout</div> */}
					</div>
					<br />
					<h4>I wanna get more stuff, please...</h4>
				</div>
			</div>
		</Fragment> :
		<Fragment>
			<div>
				<h3>
				Cart is Empty
				</h3>
			</div>
		</Fragment>
	);
};


Cart.propTypes = {
	cart        : object.isRequired,
	addCounter  : func.isRequired,
	lessCounter : func.isRequired,
	delItem: func.isRequired
};

export default Cart;
