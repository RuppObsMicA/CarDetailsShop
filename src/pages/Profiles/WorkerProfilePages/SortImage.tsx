import React from 'react';

import sortArrow from '../../../assets/images/Profiles/sortArrow.png';
import { FetchedOrder } from '../GeneralPagesForAllProfiles/Order/OrdersByUser';
type SortImageProps = {
    field: keyof FetchedOrder;
    onClick: <T extends keyof FetchedOrder>(args: T) => void;
};
export const SortImage = ({ onClick, field }: SortImageProps) => {
    return (
        <img
            className="workers-orders__sort-image"
            src={sortArrow}
            alt="sortArrow"
            onClick={() => onClick(field)}
        />
    );
};
