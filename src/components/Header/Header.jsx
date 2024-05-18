import React from 'react';
import Navbar from "./Navbar/Navbar";
import PrimaryInfo from "./PrimaryInfo/PrimaryInfo";

const Header = ({modalActive, setModalActive}) => {
    return (
        <header className="header">
            <PrimaryInfo modalActive={modalActive} setModalActive={setModalActive}></PrimaryInfo>
            <Navbar></Navbar>
        </header>
    );
};

export default Header;