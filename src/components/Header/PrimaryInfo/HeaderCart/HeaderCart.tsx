import React from 'react';
import { Link } from 'react-router-dom';

import bucketImage from '../../../../assets/images/Header/bucket.svg';
const path = '/cart';

export const HeaderCart = () => {
    return (
        <Link to={path} className="header__bucket">
            <div>
                <img src={bucketImage} alt="bucket" className="header__bucket-image" />
            </div>
        </Link>
    );
};
