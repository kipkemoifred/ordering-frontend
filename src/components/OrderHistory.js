import React, { useEffect, useState } from 'react';
import { getOrders } from '../services/api';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const ordersData = await getOrders();
            setOrders(ordersData);
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <h2>Your Orders</h2>
            <div>
                {orders.length === 0 ? (
                    <p>No orders found.</p>
                ) : (
                    orders.map((order) => (
                        <div key={order.id}>
                            <h3>Order ID: {order.id}</h3>
                            <p>Total: ${order.total_price}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default OrderHistory;
