import React from 'react';

import { type FetchedOrder } from './OrdersByUser';

type OrderFullInfoProps = {
    currentOrder: FetchedOrder;
};

export const OrderFullInfo = ({ currentOrder }: OrderFullInfoProps) => {
    if (!currentOrder) {
        return <div>No data about rhe order</div>;
    }
    return (
        <div>
            <p>{currentOrder.id}</p>
            <p>{currentOrder.client_name}</p>
            <p>{currentOrder.phone}</p>
            <p>{currentOrder.address}</p>
            <p>{currentOrder.status}</p>
            {currentOrder.products.map((product) => (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <img src={product.pictureURL} alt={product.name} />
                    <p>{product.price} $</p>
                    <p>{product.quantity}</p>
                </div>
            ))}
        </div>
    );
};
