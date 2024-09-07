import { Route, Routes } from 'react-router-dom';
import React from 'react';

import { useAppSelector } from '../../store/hooks';
import { CreateNewProduct } from '../../pages/Profiles/AdminProfilePages/CreateNewProduct';
import { OrdersByUser } from '../../pages/Profiles/GeneralPagesForAllProfiles/Order/OrdersByUser';
import { PersonalData } from '../../pages/Profiles/GeneralPagesForAllProfiles/PersonalData/PersonalData';
import { WorkerOrders } from '../../pages/Profiles/WorkerProfilePages/WorkerOrders';
import { ChangePassword } from '../../pages/Profiles/GeneralPagesForAllProfiles/PersonalData/ChangePassword';
import { ProcessOrder } from '../../pages/Profiles/WorkerProfilePages/ProcessOrder';

type Route = {
    path: string;
    element: React.ReactNode;
};

const workerRoutes: Route[] = [
    { path: 'worker_orders', element: <WorkerOrders /> },
    { path: 'worker_orders/:id', element: <ProcessOrder /> },
];

const adminRoutes: Route[] = [
    { path: 'create_new_product', element: <CreateNewProduct /> },
];

const customerRoutes: Route[] = [
    { path: 'my_orders', element: <OrdersByUser /> },
    { path: 'personal_data', element: <PersonalData /> },
    { path: 'personal_data/change_password', element: <ChangePassword /> },
];

export const RoleBasedRoutes = () => {
    const role = useAppSelector((state) => state.auth.role);

    switch (role) {
        case 'admin':
            return (
                <Routes>
                    {customerRoutes.map(({ path, element }: Route) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                    {workerRoutes.map(({ path, element }: Route) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                    {adminRoutes.map(({ path, element }: Route) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            );
        case 'worker':
            return (
                <Routes>
                    {customerRoutes.map(({ path, element }: Route) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                    {workerRoutes.map(({ path, element }: Route) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            );
        case 'customer':
            return (
                <Routes>
                    {customerRoutes.map(({ path, element }: Route) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            );
        default:
            return null;
    }
};
