import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [cartItems, setCartItems] = useState([]);
    const history = useNavigate();

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

    const handleGoToCart = () => {
        history.push('/cart');
    };

    return (
        <div>
            <h1>Welcome to our Store</h1>
            <ProductList onAddToCart={handleAddToCart} />
            <button onClick={handleGoToCart}>Go to Cart ({cartItems.length})</button>
        </div>
    );
};

export default Home;
