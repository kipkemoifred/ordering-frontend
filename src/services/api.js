import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Change to your backend URL

// export const getProducts = async () => {
//     try {
//         const response = await axios.get(`${API_URL}/products`);
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching products", error);
//         throw error;
//     }
// };

export const getProducts = async () => {
    try {
        // Hardcoded product values
        const products = [
            { id: 1, name: 'Product 1', price: 19.99, description: 'Description of Product 1' },
            { id: 2, name: 'Product 2', price: 29.99, description: 'Description of Product 2' },
            { id: 3, name: 'Product 3', price: 39.99, description: 'Description of Product 3' },
            { id: 4, name: 'Product 4', price: 49.99, description: 'Description of Product 4' },
            { id: 5, name: 'Product 5', price: 59.99, description: 'Description of Product 5' },
        ];

        // Simulate a delay like an API call
        return new Promise((resolve) => {
            setTimeout(() => resolve(products), 1000);
        });
    } catch (error) {
        console.error("Error fetching products", error);
        throw error;
    }
};

export const placeOrder = async (order) => {
    try {
        const response = await axios.post(`${API_URL}/orders`, order);
        return response.data;
    } catch (error) {
        console.error("Error placing order", error);
        throw error;
    }
};

export const getOrders = async () => {
    try {
        const response = await axios.get(`${API_URL}/orders`);
        return response.data;
    } catch (error) {
        console.error("Error fetching orders", error);
        throw error;
    }
};
