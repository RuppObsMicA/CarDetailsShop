import React from 'react';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__navigation">
                <li className="navbar__button navbar__button-main">Main</li>
                <li className="navbar__button navbar__button-about">About</li>
                <li className="navbar__button navbar__button-catalog">Catalog</li>
                <li className="navbar__button navbar__button-payment-and-delivery">Payment and delivery</li>
                <li className="navbar__button navbar__button-contacts">Contacts</li>
            </ul>
        </nav>
    );
};