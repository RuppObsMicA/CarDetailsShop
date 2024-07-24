import React, { useState } from 'react';

import '../Profile';
import { type FetchedOrder } from '../GeneralPagesForAllProfiles/Order/OrdersByUser';
import { WorkerSingleOrder } from './WorkerSingleOrder';
import { SortImage } from './SortImage';

type ListOfWorkerOrdersProps = {
    orders: FetchedOrder[];
};

type SortDirection = 'asc' | 'desc' | null;
export const ListOfWorkerOrders = ({ orders }: ListOfWorkerOrdersProps) => {
    const [filteredOrders, setFilteredOrders] = useState<FetchedOrder[]>(orders);
    const [sortColumn, setSortColumn] = useState<keyof FetchedOrder | null>(null);
    const [sortDirection, setSortDirection] = useState<SortDirection>(null);

    const sortOrders = <T extends keyof FetchedOrder>(field: T) => {
        let newDirection: SortDirection = 'asc';

        if (sortColumn === field) {
            newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        }
        let sortedList;
        if (field === 'date') {
            sortedList = [...filteredOrders].sort((a, b) => {
                const dateA = new Date(a[field] as unknown as string).getTime();
                const dateB = new Date(b[field] as unknown as string).getTime();

                return newDirection === 'asc' ? dateA - dateB : dateB - dateA;
            });
        } else {
            sortedList = [...filteredOrders].sort((a, b) => {
                if (newDirection === 'asc') {
                    return (a[field] as number) - (b[field] as number);
                } else {
                    return (b[field] as number) - (a[field] as number);
                }
            });
        }

        setFilteredOrders(sortedList);
        setSortColumn(field);
        setSortDirection(newDirection);
    };

    const handleOrderStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedStatus = event.target.value;

        if (selectedStatus !== 'all' && orders) {
            const newFilteredOrders = orders.filter(
                (order) => order.status === selectedStatus,
            );
            setFilteredOrders(newFilteredOrders);
        } else {
            setFilteredOrders(orders!);
        }
    };

    console.log(filteredOrders);

    return (
        <div className="workers-orders">
            <div className="workers-orders__header">
                <div className="workers-orders__column">
                    <span>№ order</span>
                    <SortImage field="id" onClick={sortOrders} />
                </div>
                <div className="workers-orders__column">
                    <span>Customer</span>
                    <SortImage field="client_name" onClick={sortOrders} />
                </div>
                <div className="workers-orders__column">
                    <span>Phone</span>
                    <SortImage field="phone" onClick={sortOrders} />
                </div>
                <div className="workers-orders__column">
                    <span>Date</span>
                    <SortImage field="date" onClick={sortOrders} />
                </div>
                <div className="workers-orders__column">
                    <span>Price</span>
                    <SortImage field="price" onClick={sortOrders} />
                </div>
                <div className="workers-orders__column">
                    <span>Status</span>
                    <select onChange={handleOrderStatusChange}>
                        <option value="all">all</option>
                        <option value="pending">pending</option>
                        <option value="approved">approved</option>
                        <option value="delivered">delivered</option>
                        <option value="cancelled">cancelled</option>
                    </select>
                </div>
            </div>
            <div className="workers-orders__orders-table">
                {filteredOrders.map((order) => (
                    <WorkerSingleOrder key={order.id} order={order} />
                ))}
            </div>
        </div>
    );
};
