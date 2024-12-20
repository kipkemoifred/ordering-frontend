import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import Navbar from './components/Navbar';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const handleRemoveFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const handlePlaceOrder = async () => {
        // Call the API to place the order
        // await placeOrder({ items: cartItems });
        alert('Order placed');
        setCartItems([]); // Clear the cart after placing the order
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/cart">
                    <CartPage cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} onPlaceOrder={handlePlaceOrder} />
                </Route>
                <Route path="/orders">
                    <OrderPage />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
