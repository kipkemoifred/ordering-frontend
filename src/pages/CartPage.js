import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, onRemoveFromCart, onPlaceOrder }) => {
    return (
        <div>
            <Cart cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} onPlaceOrder={onPlaceOrder} />
        </div>
    );
};

export default CartPage;
