import React from 'react';

const Navbar = () => {
    return (
        <nav className="header__navbar">
            <div className="header__navbar__button header__navbar__button__main">Main</div>
            <div className="header__navbar__button header__navbar__button__about">About</div>
            <div className="header__navbar__button header__navbar__button__catalog">Catalog</div>
            <div className="header__navbar__button header__navbar__button__payment-and-delivery">Payment and delivery</div>
            <div className="header__navbar__button header__navbar__button__contacts">Contacts</div>
        </nav>
    );
};

export default Navbar;