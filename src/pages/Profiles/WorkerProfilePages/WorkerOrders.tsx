import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchAllOrders } from '../../../utils/FetchMethods/Profiles/Orders/orders';
import { Loader } from '../../../components/CustomComponents/Loader/Loader';
import { Error } from '../../../components/CustomComponents/Error/Error';
import { Notification } from '../../../components/CustomComponents/Notification/Notification';
import { type FetchedOrder } from '../GeneralPagesForAllProfiles/Order/OrdersByUser';
import { ListOfWorkerOrders } from './ListOfWorkerOrders';
import arrowBackward from '../../../assets/images/Profiles/ArrowBackward.svg';
import arrowForward from '../../../assets/images/Profiles/ArrowForward.svg';

export type ResponseFetchOrders = {
    orders: FetchedOrder[];
};

export const WorkerOrders = () => {
    const [orders, setOrders] = useState<FetchedOrder[]>();

    const { isPending, isError, error, data } = useQuery({
        queryKey: ['fetchAllOrders'],
        queryFn: () => fetchAllOrders(),
    });

    useEffect(() => {
        if (data && Array.isArray(data)) {
            setOrders(data);
        }
    }, [data]);

    if (isPending) {
        return <Loader />;
    }

    console.log(orders);

    return (
        <div className="profile-customer">
            <div className="profile-customer__orders-history">
                <h1>Orders</h1>
                {isError && <Error message={error.message} />}
                {!orders?.length && <Notification message="No orders available" />}
                {orders && <ListOfWorkerOrders orders={orders} />}
                <div className="profile-customer__orders-history__navigation">
                    <img src={arrowBackward} alt="arrowBackward" />
                    <img src={arrowForward} alt="arrowForward" />
                </div>
            </div>
        </div>
    );
};
