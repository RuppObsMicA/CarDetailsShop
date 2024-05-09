import React, {useContext} from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import {AuthContext} from "../context/auth-context";
import {privateRoutes, publicRoutes} from "./routes";

const AppRouter = () => {

    const {isLoggedIn} = useContext(AuthContext);

    if (isLoggedIn === true) {
        return (
            <div>
                <Routes>
                    {privateRoutes.map(route =>
                        <Route
                            element={route.element}
                            path={route.path}
                            exact={route.exact}
                            key={route.path}
                        />
                    )}
                </Routes>
            </div>
        )
    } else {
        return (
            <div>
                <Routes>
                    {publicRoutes.map(route =>
                        <Route
                            element={route.element}
                            path={route.path}
                            exact={route.exact}
                            key={route.path}
                        />
                    )}
                </Routes>
            </div>
        )
    }

};

export default AppRouter;