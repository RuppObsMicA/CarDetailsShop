import React from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { useAppSelector } from '../../store/hooks';
import { SignUpSignIn } from '../../pages/SignUp-SignIn/SignUpSignIn';
import { fetchVerifyToken } from '../../utils/fetchMethods';
import { Loader } from '../CustomComponents/Loader/Loader';
import { Error } from '../CustomComponents/Error/Error';

export const ProtectedRoutes = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    const { isPending, isError, error } = useQuery({
        queryKey: ['verifyingToken'],
        queryFn: fetchVerifyToken,
        enabled: isAuth,
    });

    if (!isAuth) {
        return <SignUpSignIn />;
    }

    if (isPending) {
        return <Loader />;
    }

    if (isError) {
        return <Error message={error.message} />;
    }

    return <Outlet />;
};
