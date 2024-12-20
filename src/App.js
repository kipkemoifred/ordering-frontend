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
    const handleAddToCart = (product) => {
      setCartItems((prevItems) => {
          const existingItem = prevItems.find((item) => item.id === product.id);
          if (existingItem) {
              return prevItems.map((item) =>
                  item.id === product.id
                      ? { ...item, quantity: item.quantity + 1 }
                      : item
              );
          }
          return [...prevItems, { ...product, quantity: 1 }];
      });
  };

    return (
        <Router>
            <Navbar />
            <Routes>
            <Route path="/" element={<Home cartItems={cartItems} onAddToCart={handleAddToCart} />} />
                <Route path="/cart" element={<CartPage cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} onPlaceOrder={handlePlaceOrder} />} />
                <Route path="/orders" element={<OrderPage />} />
            </Routes>
        </Router>
    );
}

export default App;
