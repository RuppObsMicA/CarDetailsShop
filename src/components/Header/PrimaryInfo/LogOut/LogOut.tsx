import React from 'react';
import { useNavigate } from 'react-router-dom';

import logOutImage from '../../../../assets/images/Header/logout.svg';
import { useAppDispatch } from '../../../../store/hooks';
import { authActions } from '../../../../store/auth-slice';

export const LogOut = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const logOut = () => {
        dispatch(authActions.logout());
        navigate('/');
    };

    return (
        <div className="header__logout" onClick={logOut}>
            <img
                src={logOutImage}
                alt="Logout"
                className="header__logout-image"
            />
        </div>
    );
};
