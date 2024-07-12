import React, { useEffect, useState } from 'react';

import { URL } from '../../../utils/constants';
import { Sidebar } from '../SideBar/Sidebar';
import { Order } from './Order/Order';
import arrowBackward from '../../../assets/images/Profiles/ArrowBackward.svg';
import arrowForward from '../../../assets/images/Profiles/ArrowForward.svg';

export type FetchedOrder = {
    id: number;
    client_id: number;
    client_name: string;
    address: string;
    date: Date;
    delivery: string;
    price: number;
    status: string;
};
export const CustomerProfile = () => {
    const [orders, setOrders] = useState();

    function fetchOrdersByUserId() {
        try {
            const promise = fetch(URL + '/get-all-orders');
            promise
                .then((response) => response.json())
                .then((orders) => {
                    console.log(orders);
                    setOrders(
                        orders.map((order: FetchedOrder) => {
                            return <Order key={order.id} order={order} />;
                        }),
                    );
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // fetchOrdersByUserId();
    }, []);

    return (
        <div className="profile-customer">
            <Sidebar />
            <div className="profile-customer__orders-history">
                <h1>Orders history</h1>
                <div className="profile-customer__orders-history__offers">
                    {orders}
                </div>
                <div className="profile-customer__orders-history__navigation">
                    <img src={arrowBackward} alt="arrowBackward" />
                    <img src={arrowForward} alt="arrowForward" />
                </div>
            </div>
        </div>
    );
};