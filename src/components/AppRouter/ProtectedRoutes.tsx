import React from 'react';
import { Outlet } from 'react-router-dom';

import { useAppSelector } from '../../store/hooks';
import { SignUpSignIn } from '../../pages/SignUp-SignIn/SignUpSignIn';
import { Loader } from '../CustomComponents/Loader/Loader';
import { Error } from '../CustomComponents/Error/Error';
import { useVerifyToken } from './hooks';

export const ProtectedRoutes = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    if (!isAuth) {
        return <SignUpSignIn />;
    }

    const { isLoading, isError, error } = useVerifyToken();

    if (isLoading) {
        return <Loader />;
    }

    if (isError && error) {
        return <Error message={error.message} />;
    }

    return <Outlet />;
};
