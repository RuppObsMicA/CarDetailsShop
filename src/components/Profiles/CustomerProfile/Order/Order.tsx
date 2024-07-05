import React from 'react';
import {FetchedOrder} from "../CustomerProfile";

type OrderProps = {
    order: FetchedOrder;
    key: number;
}

export const Order = ({order}: OrderProps) => {
    return (
        <div className="profile-customer__orders-history__orders__order">
            <h2>№ {order.id}</h2>
            {/*<h6>{order.date}</h6>*/}
            <h6>{order.price}</h6>
            <h6>{order.price}</h6>
            <h3>{order.status}</h3>
        </div>
    );
};