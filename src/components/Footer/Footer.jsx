import React from 'react';
import Catalog from "./Catalog/Catalog";
import ScheduleAndPayment from "./ScheduleAndPayment/ScheduleAndPayment";

const Footer = () => {
    return (
        <div className="footer">
            <Catalog/>
            <ScheduleAndPayment/>
        </div>
    );
};

export default Footer;