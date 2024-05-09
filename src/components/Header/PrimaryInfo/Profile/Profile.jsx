import React from 'react';
import profileImage from "../../../../images/Header/profile.svg";
import {Link} from "react-router-dom";

const Profile = () => {
    return (
        <Link to="/customer_profile" className="header__profile-image">
            <div>
                <img src = {profileImage} alt="profile"/>
            </div>
        </Link>

    );
};

export default Profile;