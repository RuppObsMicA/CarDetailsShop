import { Route, Routes } from 'react-router-dom';
import React from 'react';

import { useAppSelector } from '../../store/hooks';
import { CreateNewProduct } from '../../pages/Profiles/AdminProfilePages/CreateNewProduct';
import { OrdersByUser } from '../../pages/Profiles/GeneralPagesForAllProfiles/OrdersByUser';
import { PersonalData } from '../../pages/Profiles/GeneralPagesForAllProfiles/PersonalData';
import { NewOrders } from '../../pages/Profiles/WorkerProfilePages/NewOrders';
import { ChangePassword } from '../../pages/Profiles/GeneralPagesForAllProfiles/ChangePassword';

export const RoleBasedRoutes = () => {
    const role = useAppSelector((state) => state.auth.role);

    switch (role) {
        case 'admin':
            return (
                <Routes>
                    <Route path="orders" element={<OrdersByUser />} />
                    <Route path="personal_data" element={<PersonalData />} />
                    <Route
                        path="create_new_product"
                        element={<CreateNewProduct />}
                    />
                    <Route
                        path="personal_data/change_password"
                        element={<ChangePassword />}
                    />
                </Routes>
            );
        case 'worker':
            return (
                <Routes>
                    <Route path="orders" element={<OrdersByUser />} />
                    <Route path="personal_data" element={<PersonalData />} />
                    <Route path="new_orders" element={<NewOrders />} />
                    <Route
                        path="personal_data/change_password"
                        element={<ChangePassword />}
                    />
                </Routes>
            );
        case 'customer':
            return (
                <Routes>
                    <Route path="orders" element={<OrdersByUser />} />
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
