import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../../store/hooks';
import { RootState } from '../../../store/store';

export const Sidebar = () => {
    const role: string = useAppSelector((state: RootState) => state.auth.role);

    const setOfCustomerLinks = [
        {
            title: 'My orders',
            path: `/${role}_profile/orders`,
        },
        {
            title: 'Cart',
            path: `/${role}_profile/cart`,
        },
        {
            title: 'Personal data',
            path: `/${role}_profile/personal_data`,
        },
    ];

    const customerLinks = setOfCustomerLinks.map((link) => {
        return (
            <Link to={link.path} className="sidebar__link" key={link.title}>
                <div className="sidebar__title">{link.title}</div>
            </Link>
        );
    });

    return <aside className="sidebar">{customerLinks}</aside>;
};
