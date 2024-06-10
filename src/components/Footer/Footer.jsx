import React from 'react';
import Catalog from "./Catalog/Catalog";
import ScheduleAndPayment from "./ScheduleAndPayment/ScheduleAndPayment";

// Styles
import "./Footer.scss"


const Footer = () => {
    return (
        <footer className="footer">
            <Catalog/>
            <ScheduleAndPayment/>
        </footer>
    );
};

export default Footer;