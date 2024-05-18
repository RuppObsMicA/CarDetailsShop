import React, {useContext} from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import {AuthContext} from "../context/auth-context";
import {routes} from "./routes";

const AppRouter = () => {

    const {isLoggedIn} = useContext(AuthContext);


    return (
        <Routes>
            {routes.map(route =>
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