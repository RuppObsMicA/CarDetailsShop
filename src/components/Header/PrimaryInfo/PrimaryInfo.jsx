import React from 'react';
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Contacts from "./Contacts/Contacts";
import Bucket from "./Bucket/Bucket";
import Profile from "./Profile/Profile";
import LogOut from "./LogOut/LogOut";

const PrimaryInfo = () => {

    return (
        <div className="header__primary-info">
            <Logo/>
            <Search/>
            <Contacts/>
            <Bucket/>
            <Profile/>
            <LogOut/>
        </div>
    );
};

export default PrimaryInfo;