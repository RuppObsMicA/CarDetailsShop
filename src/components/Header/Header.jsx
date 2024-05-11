import React from 'react';
import Navbar from "./Navbar/Navbar";
import PrimaryInfo from "./PrimaryInfo/PrimaryInfo";

const Header = () => {
    return (
        <header className="header">
            <PrimaryInfo></PrimaryInfo>
            <Navbar></Navbar>
        </header>
    );
};

export default Header;