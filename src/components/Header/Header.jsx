import React from 'react';
import Navbar from "./Navbar/Navbar";
import PrimaryInfo from "./PrimaryInfo/PrimaryInfo";

// Styles
import "./Header.scss"


const Header = ({modalActive, setModalActive}) => {
    return (
        <header className="header">
            <PrimaryInfo modalActive={modalActive} setModalActive={setModalActive}></PrimaryInfo>
            <Navbar></Navbar>
        </header>
    );
};

export default Header;