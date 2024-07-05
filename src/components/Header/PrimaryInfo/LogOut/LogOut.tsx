import React from 'react';

// Pictures
import logOutImage from "../../../../images/Header/logout.svg";

// Redux Toolkit
import {useAppDispatch} from "../../../../store/hooks";
import {authActions} from "../../../../store/auth-slice";

import {useNavigate} from "react-router-dom";

export const LogOut = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const logOut = () => {
        dispatch(authActions.logout());
        navigate('/');
    }

    return (
        <div className="header__logout" onClick={logOut}>
            <img src={logOutImage} alt="Logout" className="header__logout-image"/>
        </div>
    );
};