import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../../store/hooks';
import { RootState } from '../../../store/store';
import { getRoleBasedLinks } from './SidebarRoleBasedLinks';

export const Sidebar = () => {
    const role: string = useAppSelector((state: RootState) => state.auth.role);

    const setOfAvailableLinks = getRoleBasedLinks(role);

    const customerLinks = setOfAvailableLinks.map((link) => {
        return (
            <Link to={link.path} className="sidebar__link" key={link.title}>
                <div className="sidebar__title">{link.title}</div>
            </Link>
        );
    });

    return <aside className="sidebar">{customerLinks}</aside>;
};
