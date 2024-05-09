import React from 'react';
import Navbar from "./Navbar/Navbar";
import PrimaryInfo from "./PrimaryInfo/PrimaryInfo";

const Header = () => {
    return (
        <div className="header">
            <PrimaryInfo></PrimaryInfo>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;