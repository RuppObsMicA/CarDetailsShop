import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { Loader } from '../../../components/CustomComponents/Loader/Loader';
import {
    fetchOrderByID,
    fetchUpdateStatus,
} from '../../../utils/FetchMethods/Profiles/Orders/orders';
import { Error } from '../../../components/CustomComponents/Error/Error';
import { Notification } from '../../../components/CustomComponents/Notification/Notification';
import { OrderFullInfo } from '../GeneralPagesForAllProfiles/Order/OrderFullInfo';
import {
    ORDER_STATUS_APPROVED,
    ORDER_STATUS_CANCELLED,
    ORDER_STATUS_DELIVERED,
    ORDER_STATUS_PENDING,
} from '../../../utils/constants';
import { Button } from '../../../components/CustomComponents/Button/Button';
import { FetchedOrder } from '../GeneralPagesForAllProfiles/Order/OrdersByUser';

export type ResponseUpdateStatus = {
    message: string;
};

export const ProcessOrder = () => {
    const params = useParams();
    const [notificationMessage, setNotificationMessage] = useState('');
    const [order, setOrder] = useState<FetchedOrder>();

    const {
        isPending: queryIsPending,
        isError: queryIsError,
        error: queryError,
        data: queryData,
    } = useQuery({
        queryKey: ['fetchOrderByID'],
        queryFn: () => fetchOrderByID(Number(params.id)),
    });

    useEffect(() => {
        if (queryData) {
            setOrder(queryData);
        }
    }, [queryData]);

    const {
        isPending: mutationPending,
        isError: mutationIsError,
        error: mutationError,
        mutate,
    } = useMutation({
        mutationFn: (data: { status: string }) => {
            return fetchUpdateStatus(data, Number(params.id));
        },
    });

    if (mutationPending || queryIsPending) {
        return <Loader />;
    }

    const handleCLickUpdateOrderStatus = (status: string) => {
        mutate(
            { status },
            {
                onSuccess: (responseData) => {
                    setNotificationMessage(responseData.message);
                },
            },
        );
    };

    if (!order) {
        return <div>No data about the order</div>;
    }

    return (
        <div>
            <h3>Please reach out to the client to confirm the order</h3>
            {mutationIsError && <Error message={mutationError.message} />}
            {queryIsError && <Error message={queryError.message} />}
            {notificationMessage && <Notification message={notificationMessage} />}
            <OrderFullInfo currentOrder={order} />

            {order.status !== ORDER_STATUS_CANCELLED && (
                <div>
                    <p>Update order status</p>
                    {order.status === ORDER_STATUS_PENDING ? (
                        <Button
                            text="Approve"
                            onClick={() =>
                                handleCLickUpdateOrderStatus(ORDER_STATUS_APPROVED)
                            }
                        />
                    ) : (
                        <Button
                            text="Delivered"
                            onClick={() =>
                                handleCLickUpdateOrderStatus(ORDER_STATUS_DELIVERED)
                            }
                        />
                    )}
                    <Button
                        text="Cancel"
                        onClick={() =>
                            handleCLickUpdateOrderStatus(ORDER_STATUS_CANCELLED)
                        }
                    />
                </div>
            )}
        </div>
    );
};
