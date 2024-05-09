import React from 'react';
import Schedule from "./Schedule/Schedule";
import Payment from "./Payment/Payment";

const ScheduleAndPayment = () => {
    return (
        <div className="footer__schedule-and-payment">
            <Schedule/>
            <Payment/>
        </div>
    );
};

export default ScheduleAndPayment;