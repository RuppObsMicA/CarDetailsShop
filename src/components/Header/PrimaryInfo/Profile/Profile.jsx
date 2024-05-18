import React from 'react';
import profileImage from "../../../../images/Header/profile.svg";
import {Link} from "react-router-dom";

const Profile = ({modalActive, setModalActive}) => {

    function isSignIn(){
        if (!localStorage.getItem("logged")){
            setModalActive(true);
        }
    }


    return (
        <Link to={localStorage.getItem("logged") ? "/customer_profile": "/"} className="header__profile-image" onClick={isSignIn}>
            <div>
                <img src = {profileImage} alt="profile"/>
            </div>
        </Link>
    );


};

export default Profile;