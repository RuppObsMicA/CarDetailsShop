import React from 'react';

import { Navbar } from './Navbar/Navbar';
import { PrimaryInfo } from './PrimaryInfo/PrimaryInfo';

// Styles
import './Header.scss';

export const Header = () => {
    return (
        <header className="header">
            <PrimaryInfo />
            <Navbar />
        </header>
    );
};
