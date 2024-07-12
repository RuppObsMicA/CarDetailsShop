import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../../../store/hooks';
import { RootState } from '../../../../store/store';
import bucketImage from '../../../../assets/images/Header/bucket.svg';

export const HeaderCart = () => {
    const role = useAppSelector((state: RootState) => state.auth.role);

    const path = '/cart';
    return (
        <Link to={path} className="header__bucket">
            <div>
                <img
                    src={bucketImage}
                    alt="bucket"
                    className="header__bucket-image"
                />
            </div>
        </Link>
    );
};
