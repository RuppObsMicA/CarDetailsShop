import React from 'react';
import profileImage from "../../../../images/Header/profile.svg";
import {Link} from "react-router-dom";
import {getRole} from "../../../JSMethods/JSMethods";

const Profile = ({modalActive, setModalActive}) => {

    function isSignIn(){
        if (!localStorage.getItem("logged")){
            setModalActive(true);
        }
    }

    return (
        <Link to={localStorage.getItem("logged") ? `/${getRole()}_profile/orders`: "/"}
              className="header__profile"
              onClick={isSignIn}
        >
            <div>
                <img src = {profileImage} alt="profile" className="header__profile-image"/>
            </div>
        </Link>
    );


};

export default Profile;