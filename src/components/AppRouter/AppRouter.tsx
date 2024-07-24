import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Main } from '../Main/Main';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';
import { Cart } from '../../pages/Cart/Cart';
import { RootLayout } from '../../RootLayout';
import { ProtectedRoutes } from './ProtectedRoutes';
import { Catalog } from '../../pages/Catalog/Catalog';
import { ProductCard } from '../../pages/Catalog/CatalogMainContent/Product/ProductCard/ProductCard';
import { CatalogMainContent } from '../../pages/Catalog/CatalogMainContent/CatalogMainContent';
import { ConfirmOrder } from '../../pages/Cart/ConfirmOrder/ConfirmOrder';
import { RoleBasedRoutes } from './RoleBasedRoutes';
import { Profile } from '../../pages/Profiles/Profile';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFoundPage />,
        children: [
            { path: '/', element: <Main /> },
            { path: '/cart', element: <Cart /> },
            {
                path: ':product_type',
                element: <Catalog />,
                children: [
                    { index: true, element: <CatalogMainContent /> },
                    { path: ':product_id', element: <ProductCard /> },
                ],
            },
            {
                element: <ProtectedRoutes />,
                children: [
                    { path: 'cart/checkout', element: <ConfirmOrder /> },
                    {
                        path: '/profile',
                        element: <Profile />,
                        children: [{ path: '*', element: <RoleBasedRoutes /> }],
                    },
                ],
            },
        ],
    },
]);
