import React from 'react';

const Order = ({order}) => {
    return (
        <div className="profile-customer__orders-history__orders__order">
            <h2>№ {order.id}</h2>
            <h6>{order.date}</h6>
            <h6>{order.price}</h6>
            <h6>{order.price}</h6>
            <h3>{order.status}</h3>
        </div>
    );
};

export default Order;