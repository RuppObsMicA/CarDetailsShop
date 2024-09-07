import { Outlet } from 'react-router-dom';
import React from 'react';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Loader } from './components/CustomComponents/Loader/Loader';
import { Error } from './components/CustomComponents/Error/Error';
import { useVerifyToken } from './components/AppRouter/hooks';

export function RootLayout() {
    const { isPending, isError, error } = useVerifyToken();

    if (isPending) {
        return <Loader />;
    }

    return (
        <>
            <Header />
            {isError && error && <Error message={error.message} />}
            <Outlet />
            <Footer />
        </>
    );
}
