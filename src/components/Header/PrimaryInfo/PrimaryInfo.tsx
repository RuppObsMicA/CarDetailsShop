import React from 'react';

import { Logo } from './Logo/Logo';
import { Search } from './Search/Search';
import { Contacts } from './Contacts/Contacts';
import { HeaderCart } from './HeaderCart/HeaderCart';
import { HeaderProfile } from './HeaderProfile/HeaderProfile';
import { LogOut } from './LogOut/LogOut';
import { useAppSelector } from '../../../store/hooks';
import { RootState } from '../../../store/store';

export const PrimaryInfo = () => {
    const isAuth = useAppSelector((state: RootState) => state.auth.isAuth);

    return (
        <div className="header__primary-info">
            <Logo />
            <Search />
            <Contacts />
            <HeaderCart />
            <HeaderProfile />
            {isAuth && <LogOut />}
        </div>
    );
};
