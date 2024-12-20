import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Change to your backend URL

export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
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
