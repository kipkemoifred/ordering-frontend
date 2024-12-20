import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';

const ProductList = ({ onAddToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await getProducts();
            setProducts(productsData);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Available Products</h2>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
