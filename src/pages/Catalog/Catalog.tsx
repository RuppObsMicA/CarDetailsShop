import React from 'react';
import { Outlet } from 'react-router-dom';

import { CatalogSideBar } from './CatalogSideBar/CatalogSideBar';

export const Catalog = () => {
    return (
        <div className="catalog__content">
            <div className="catalog__search-menu">
                <CatalogSideBar />
                <Outlet />
            </div>
        </div>
    );
};
