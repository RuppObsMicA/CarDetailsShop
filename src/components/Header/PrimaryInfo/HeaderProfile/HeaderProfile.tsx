import React from 'react';
import { Link } from 'react-router-dom';

import profileImage from '../../../../assets/images/Header/profile.svg';

export const HeaderProfile = () => {
    return (
        <Link to="/profile/my_orders" className="header__profile">
            <div>
                <img src={profileImage} alt="profile" className="header__profile-image" />
            </div>
        </Link>
    );
};
