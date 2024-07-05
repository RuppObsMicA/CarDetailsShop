import React from "react";

import {createBrowserRouter} from "react-router-dom";
import {Main} from "../Main/Main";
import {NotFoundPage} from "./NotFoundPage/NotFoundPage";
import {Cart} from "../Cart/Cart";
import {AdminProfile} from "../Profiles/AdminProfile/AdminProfile";
import {RootLayout} from "../../RootLayout";
import {ProtectedRoutes} from "./ProtectedRoutes";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <NotFoundPage/>,
        children:
            [
                {path: '/', element: <Main/>},
                {path: '/cart', element: <Cart/>},
                {
                    element: <ProtectedRoutes/>,
                    children:
                        [
                            {path: 'profile/orders', element: <AdminProfile/>},
                            {path: 'cart', element: <Cart/>}
                        ]
                }
            ]
    },
]);