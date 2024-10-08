import React from 'react';
import { Link } from 'react-router-dom';

// Pictures
import companyLogo from '../../../../assets/images/Header/logo.svg';

export const Logo = () => {
    return (
        <Link to="/" className="header__logo">
            <div>
                <img src={companyLogo} alt="Logo" className="header__logo-image" />
            </div>
        </Link>
    );
};
