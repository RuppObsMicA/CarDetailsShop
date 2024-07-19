import React from 'react';

import { type FetchedOrder } from '../OrdersByUser';
import { formatDate } from '../../../../utils/jsMethods';
import orderCancelled from '../../../../assets/images/Profiles/OrderCancelled.svg';
import orderPending from '../../../../assets/images/Profiles/OrderPending.svg';
import orderDelivered from '../../../../assets/images/Profiles/OrderDelivered.svg';

type OrderProps = {
    order: FetchedOrder;
    key: number;
};

const imagesForStatus: { [key: string]: string } = {
    pending: orderPending,
    cancelled: orderCancelled,
    delivered: orderDelivered,
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
                <img src={imagesForStatus[order.status]} alt="StatusImage" />
            </span>
        </div>
    );
};
