import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [cartItems, setCartItems] = useState([]);
    const history = useNavigate();
    console.log("in home page...");

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
        history('/cart');
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center p-4">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to our Store</h1>
                <p className="text-lg text-gray-600 mt-2">Browse our amazing collection of products.</p>
                <button
                    onClick={handleGoToCart}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
                >
                    Go to Cart ({cartItems.length})
                </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Example Product Card */}
                <div className="max-w-xs w-full bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
                    <img src="https://via.placeholder.com/150" alt="product" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800">Product Name</h3>
                        <p className="text-gray-500">$20.00</p>
                    </div>
                    <div className="p-4 bg-gray-100">
                        <button
                            onClick={() => handleAddToCart({ id: 1, name: 'Product Name', price: 20 })}
                            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Other products can be mapped here */}
            </div>

            <ProductList onAddToCart={handleAddToCart} />
        </div>
    );
};

export default Home;
