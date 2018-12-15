// ########## Import Dependencies Here ##########
import React, { Fragment } from 'react';
import { shape, func } from 'prop-types';

// ########## Import Components Here ##########
import Counter from './Counter';

const CartItem = props => {
	const { cartItem, addCounter, delItem, lessCounter } = props;
	return (
		<Fragment>
			<div className='cart-item'>
				<div className='img'>
					<div className={`item-frame-${cartItem.cartItemId.slice(5)}`}>
						<div
							style={{
								background     : `url(${cartItem.cartItemImage})`,
								noRepeat       : 'center',
								width          : '12em',
								height         : '12em',
								backgroundSize : 'cover',
								overflow       : 'hidden',
								borderRadius   : '1em'
							}}
						/>
					</div>
				</div>

				<div className='detail'>
					<h3 className='item-name'>{cartItem.cartItemName}</h3>
					<p className='item-size'>{cartItem.cartItemSize} </p>
					<div className='co'>
						<div id='counter'>
							<Counter addCounter={addCounter} lessCounter={lessCounter} cartItem={cartItem} />
						</div>
						<div className='del-icon' role="button" onClick={()=> delItem(cartItem)} tabIndex="0" onKeyPress={()=>{}} />
					</div>
				</div>

				<div className='sec-amt'>
					<div className='amount'>Rs: {cartItem.cartItemValue}</div>	
				</div>
			</div>
		</Fragment>
	);
};

CartItem.propTypes = {
	cartItem    : shape().isRequired,
	addCounter  : func.isRequired,
	lessCounter : func.isRequired,
	delItem: func.isRequired
};

export default CartItem;
