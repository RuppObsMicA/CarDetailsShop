import React from 'react';
import companyLogo from '../../../../images/Header/logo.svg';
import {Link} from "react-router-dom";


const Logo = () => {
    return (
        <Link to="/" className="header__logo-image">
            <div>
                <img src={companyLogo} alt="Logo" />
            </div>
        </Link>

    );
};

export default Logo;