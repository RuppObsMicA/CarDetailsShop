import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchOrdersByUserId } from '../../../utils/fetchMethods';
import { Loader } from '../../../components/CustomComponents/Loader/Loader';
import { useAppSelector } from '../../../store/hooks';
import { Order } from './Order/Order';
import { Error } from '../../../components/CustomComponents/Error/Error';
import { Notification } from '../../../components/CustomComponents/Notification/Notification';
import { type FetchedProduct } from '../../Catalog/CatalogMainContent/CatalogMainContent';
import arrowBackward from '../../../assets/images/Profiles/ArrowBackward.svg';
import arrowForward from '../../../assets/images/Profiles/ArrowForward.svg';

export type FetchedOrder = {
    id: number;
    client_id: number;
    client_name: string;
    address: string;
    date: Date;
    price: number;
    products: FetchedProduct[];
    status: string;
};
export type ResponseFetchOrderFailure = {
    message: string;
};
export const OrdersByUser = () => {
    const [orders, setOrders] = useState<FetchedOrder[]>();
    const userId = useAppSelector((state) => state.auth.id);

    const { isPending, isError, error, data } = useQuery({
        queryKey: ['fetchOrdersData'],
        queryFn: () => fetchOrdersByUserId(userId),
    });

    useEffect(() => {
        console.log(data);

        if (data && Array.isArray(data)) {
            setOrders(data);
        }
    }, [userId, data]);

    if (isPending) {
        return <Loader />;
    }

    console.log(orders);

    return (
        <div className="profile-customer">
            <div className="profile-customer__orders-history">
                <h1>Orders history</h1>
                {isError && <Error message={error.message} />}
                {!orders && <Notification message="You haven not made any order yet" />}
                <div className="profile-customer__orders-history__orders">
                    {orders?.map((order) => <Order order={order} key={order.id} />)}
                </div>
                <div className="profile-customer__orders-history__navigation">
                    <img src={arrowBackward} alt="arrowBackward" />
                    <img src={arrowForward} alt="arrowForward" />
                </div>
            </div>
        </div>
    );
};
