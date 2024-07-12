import { Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { getAuthToken } from './utils/localStorage';
import { authActions } from './store/auth-slice';
import { useAppDispatch } from './store/hooks';
import { fetchVerifyToken } from './utils/fetchMethods';
import { Loader } from './components/CustomComponents/Loader/Loader';
import { Error } from './components/CustomComponents/Error/Error';

export function RootLayout() {
    const dispatch = useAppDispatch();

    // we use token in LS to check if it is valid and if it is we login the user
    const token: string | null = getAuthToken();

    if (!token) {
        return (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        );
    }

    const { isPending, isError, error, data } = useQuery({
        queryKey: ['initialAuth'],
        queryFn: fetchVerifyToken,
        enabled: token !== null,
    });

    if (isPending) {
        return <Loader />;
    }

    if (data && token) {
        dispatch(
            authActions.login({
                token,
                role: data.user.role,
                id: data.user.id,
                fullName: data.user.fullname,
            }),
        );
    }

    return (
        <>
            <Header />
            {isError && <Error message={error.message} />}
            <Outlet />
            {/*Use Outlet since Header and Footer always must be a part of the page, we only change main using the Outlet*/}
            <Footer />
        </>
    );
}
