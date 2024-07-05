import React from 'react';
import {Link} from "react-router-dom";


// Pictures
import profileImage from "../../../../images/Header/profile.svg";

// Redux toolkit


export const Profile = () => {
    return (
        <Link to='/profile/orders' className="header__profile">
            <div>
                <img src={profileImage} alt="profile" className="header__profile-image"/>
            </div>
        </Link>
    );
};