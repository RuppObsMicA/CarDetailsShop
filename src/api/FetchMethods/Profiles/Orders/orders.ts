import {
    type FetchedOrder,
    type ResponseFetchOrderFailure,
} from '../../../../pages/Profiles/GeneralPagesForAllProfiles/Order/OrdersByUser';
import { fetchApi } from '../../../fetchAPI';
import { type ResponseFetchOrders } from '../../../../pages/Profiles/WorkerProfilePages/WorkerOrders';
import { type ResponseUpdateStatus } from '../../../../pages/Profiles/WorkerProfilePages/ProcessOrder';

export async function fetchOrdersByUserId(
    userId: number,
): Promise<FetchedOrder | ResponseFetchOrderFailure> {
    return fetchApi<undefined, FetchedOrder | ResponseFetchOrderFailure>({
        endpoint: `/fetch-orders?user_id=${userId}`,
        method: 'GET',
    });
}

export async function fetchAllOrders(): Promise<ResponseFetchOrders> {
    return fetchApi<undefined, ResponseFetchOrders>({
        endpoint: `/all-orders`,
        method: 'GET',
    });
}
export async function fetchOrderByID(order_id: number): Promise<FetchedOrder> {
    return fetchApi<undefined, FetchedOrder>({
        endpoint: `/fetch-order-by-id?order_id=${order_id}`,
        method: 'GET',
    });
}

export async function updateOrderStatus(
    data: { status: string },
    order_id: number,
): Promise<ResponseUpdateStatus> {
    return fetchApi<{ status: string }, ResponseUpdateStatus>({
        endpoint: `/update-order-status?order_id=${order_id}`,
        method: 'PATCH',
        data,
    });
}
