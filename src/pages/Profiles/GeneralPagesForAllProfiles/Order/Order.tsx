import React from 'react';

import { type FetchedOrder } from './OrdersByUser';
import { formatDate } from '../../../../utils/jsMethods';
import { imagesForOrderStatus } from '../../../../utils/constants';

type OrderProps = {
    order: FetchedOrder;
    key: number;
};

export const Order = ({ order }: OrderProps) => {
    const formattedDate = formatDate(order.date.toString());

    return (
        <div className="profile-customer__orders-history__orders__order">
            <h2>№ {order.id}</h2>
            <h6>{formattedDate}</h6>
            <h6>{order.price} $</h6>
            <div>
                {order.products.map((product) => (
                    <h6 key={product.id}>{product.name} </h6>
                ))}
            </div>
            <span>
                {order.status}{' '}
                <img src={imagesForOrderStatus[order.status]} alt="StatusImage" />
            </span>
        </div>
    );
};
