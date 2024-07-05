import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Outlet} from "react-router-dom";
import {getAuthToken} from "./utils/localStorage";
import {authActions} from "./store/auth-slice";
import {useAppDispatch} from "./store/hooks";
import {useQuery} from "@tanstack/react-query";
import {fetchVerifyToken} from "./utils/fetchMethods";
import React from "react";
import {Loader} from "./components/CustomComponents/Loader/Loader";
import {Error} from "./components/CustomComponents/Error/Error";

export function RootLayout() {

    const dispatch = useAppDispatch();

    // we use token in LS to check if it is valid and if it is we login the user
    // can also process remember me field in the sign in form
    const token: string | null = getAuthToken();
    console.log(token);

    const {isPending, isError, error, data} = useQuery({
        queryKey: ['initialAuth'],
        queryFn: fetchVerifyToken,
        enabled: token !== undefined
    });


    if (isPending) {
        return <Loader />;
    }

    if (data && token) {
        console.log(data.user.role);
        dispatch(authActions.login({token, role:data.user.role}))
    }

    return (
        <>
            <Header/>
            {isError && <Error message={error.message}/>}
            <Outlet/>
            {/*Use Outlet since Header and Footer always must be a part of the page, we only change main using the Outlet*/}
            <Footer/>
        </>
    )
}