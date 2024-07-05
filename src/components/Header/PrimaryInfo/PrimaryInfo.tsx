import React from 'react';

// Components
import {Logo} from "./Logo/Logo";
import {Search} from "./Search/Search";
import {Contacts} from "./Contacts/Contacts";
import {Bucket} from "./Bucket/Bucket";
import {Profile} from "./Profile/Profile";
import {LogOut} from "./LogOut/LogOut";

// Hooks
import {useAppSelector} from "../../../store/hooks";
import {RootState} from "../../../store/store";

export const PrimaryInfo = () => {

    const isAuth = useAppSelector((state:RootState) => state.auth.isAuth);

    return (
        <div className="header__primary-info">
            <Logo/>
            <Search/>
            <Contacts/>
            <Bucket/>
            <Profile/>
            {isAuth && <LogOut/>}
        </div>
    );
};