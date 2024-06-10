import React, {useContext} from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import {AuthContext} from "../context/auth-context";
import {adminRoutes, customerRoutes, workerRoutes, publicRoutes} from "./routes";

const AppRouter = () => {

    const {isLoggedIn} = useContext(AuthContext);
    let availableRoutes = publicRoutes;

    switch (localStorage.getItem("role")){
        case "Admin":
            availableRoutes = adminRoutes;
            break
        case "Customer":
            availableRoutes = customerRoutes;
            break
        case "Worker":
            availableRoutes = workerRoutes;
            break
    }

    return (
        <Routes>
            {availableRoutes.map(route =>
                <Route
                    element={route.element}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
        </Routes>
    )

};

export default AppRouter;