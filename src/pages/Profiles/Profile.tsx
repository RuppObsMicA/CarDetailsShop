import React from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from './SideBar/Sidebar';
import './ProfileStyles.scss';

export const Profile = () => {
    return (
        <div className="profile">
            <Sidebar />
            <Outlet />
        </div>
    );
};
