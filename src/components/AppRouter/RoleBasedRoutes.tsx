import { Route, Routes } from 'react-router-dom';
import React from 'react';

import { useAppSelector } from '../../store/hooks';
import { CreateNewProduct } from '../../pages/Profiles/AdminProfilePages/CreateNewProduct';
import { OrdersByUser } from '../../pages/Profiles/GeneralPagesForAllProfiles/Order/OrdersByUser';
import { PersonalData } from '../../pages/Profiles/GeneralPagesForAllProfiles/PersonalData/PersonalData';
import { WorkerOrders } from '../../pages/Profiles/WorkerProfilePages/WorkerOrders';
import { ChangePassword } from '../../pages/Profiles/GeneralPagesForAllProfiles/PersonalData/ChangePassword';
import { ProcessOrder } from '../../pages/Profiles/WorkerProfilePages/ProcessOrder';

export const RoleBasedRoutes = () => {
    const role = useAppSelector((state) => state.auth.role);

    switch (role) {
        case 'admin':
            return (
                <Routes>
                    <Route path="my_orders" element={<OrdersByUser />} />
                    <Route path="personal_data" element={<PersonalData />} />
                    <Route path="create_new_product" element={<CreateNewProduct />} />
                    <Route path="worker_orders" element={<WorkerOrders />} />
                    <Route path="worker_orders/:id" element={<ProcessOrder />} />
                    <Route
                        path="personal_data/change_password"
                        element={<ChangePassword />}
                    />
                </Routes>
            );
        case 'worker':
            return (
                <Routes>
                    <Route path="my_orders" element={<OrdersByUser />} />
                    <Route path="personal_data" element={<PersonalData />} />
                    <Route path="worker_orders" element={<WorkerOrders />} />
                    <Route path="worker_orders/:id" element={<ProcessOrder />} />
                    <Route
                        path="personal_data/change_password"
                        element={<ChangePassword />}
                    />
                </Routes>
            );
        case 'customer':
            return (
                <Routes>
                    <Route path="my_orders" element={<OrdersByUser />} />
                    <Route path="personal_data" element={<PersonalData />} />
                    <Route
                        path="personal_data/change_password"
                        element={<ChangePassword />}
                    />
                </Routes>
            );
        default:
            return null;
    }
};
