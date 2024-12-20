import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart, onPlaceOrder }) => {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div>
            <h2>Your Cart</h2>
            <div>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        {cartItems.map((item) => (
                            <div key={item.id}>
                                <h3>{item.name}</h3>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                            </div>
                        ))}
                        <div>
                            <h4>Total: ${calculateTotal()}</h4>
                            <button onClick={() => onPlaceOrder()}>Place Order</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
