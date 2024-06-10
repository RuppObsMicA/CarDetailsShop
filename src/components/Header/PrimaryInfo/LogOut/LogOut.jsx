import React, {useContext} from 'react';
import logOutImage from "../../../../images/Header/logout.svg";
import {AuthContext} from "../../../context/auth-context";

const LogOut = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

    const logOut = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("logged");
        localStorage.removeItem("role");
        // redirect to main
    }

    if (isLoggedIn === true){
        return (
            <div className="header__logout" onClick={logOut}>
                <img src={logOutImage} alt="Logout" className="header__logout-image"/>
            </div>
        );
    }
};

export default LogOut;