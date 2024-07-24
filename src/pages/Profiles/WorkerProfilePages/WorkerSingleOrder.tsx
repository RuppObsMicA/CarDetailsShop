import React from 'react';
import { Link } from 'react-router-dom';

import { type FetchedOrder } from '../GeneralPagesForAllProfiles/Order/OrdersByUser';
import { formatDate } from '../../../utils/jsMethods';
import { imagesForOrderStatus } from '../../../utils/constants';

type WorkerOrderProps = {
    order: FetchedOrder;
};

export const WorkerSingleOrder = ({ order }: WorkerOrderProps) => {
    const { id, date, status, client_name, price, phone } = order;

    const formattedDate = formatDate(date.toString());

    return (
        <Link to={id.toString()} className="workers-orders__link">
            <div className="workers-orders__order">
                <div className="workers-orders__column">{id}</div>
                <div className="workers-orders__column">{client_name}</div>
                <div className="workers-orders__column">{phone}</div>
                <div className="workers-orders__column">{formattedDate}</div>
                <div className="workers-orders__column">{price} $</div>
                <div className="workers-orders__column">
                    {status}{' '}
                    <img src={imagesForOrderStatus[order.status]} alt="StatusImage" />
                </div>
            </div>
        </Link>
    );
};
