import React from 'react';

import { Loader } from '../../../../components/CustomComponents/Loader/Loader';
import { Order } from './Order';
import { Error } from '../../../../components/CustomComponents/Error/Error';
import { Notification } from '../../../../components/CustomComponents/Notification/Notification';
import { type FetchedProduct } from '../../../Catalog/CatalogMainContent/CatalogMainContent';
import arrowBackward from '../../../../assets/images/Profiles/ArrowBackward.svg';
import arrowForward from '../../../../assets/images/Profiles/ArrowForward.svg';
import { useOrdersByUser } from '../../hooks';

export type FetchedOrder = {
    id: number;
    client_id: number;
    client_name: string;
    address: string;
    date: Date;
    price: number;
    phone?: number;
    products: FetchedProduct[];
    status: string;
};
export type ResponseFetchOrderFailure = {
    message: string;
};
export const OrdersByUser = () => {
    const { isPending, isError, error, orders } = useOrdersByUser();

    if (isPending) {
        return <Loader />;
    }

    console.log(orders);

    return (
        <div className="profile-customer">
            <div className="profile-customer__orders-history">
                <h1>My orders</h1>
                {isError && error && <Error message={error.message} />}
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
