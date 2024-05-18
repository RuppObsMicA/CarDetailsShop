import React, {useContext} from 'react';
import logOutImage from "../../../../images/Header/logout.svg";
import {AuthContext} from "../../../context/auth-context";

const LogOut = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

    const logOut = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("logged");
        // redirect to main
    }

    if (isLoggedIn === true){
        return (
            <div className="header__logout-image" onClick={logOut}>
                <img src={logOutImage} alt="Logout" />
            </div>
        );
    }
};

export default LogOut;