import React from 'react';
import paymentImage from '../../../../images/Footer/payment.svg';

export const Payment = () => {
    return (
        <div className="schedule-and-payment__payment">
            <img src={paymentImage} alt="payment" className="schedule-and-payment__image"/>
        </div>
    );
};
