import React from 'react';

// Pictures
import searchIconImage from '../../../../images/Header/searchIcon.svg';

export const Search = () => {
    return (
        <div className="header__search">
            <input type="text" className="header__search-input"/>
            <img src={searchIconImage} alt="search icon" className="header__search-icon"/>
        </div>
    );
};