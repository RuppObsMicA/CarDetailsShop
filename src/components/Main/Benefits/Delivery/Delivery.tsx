import React from 'react';

import deliveryImage from '../../../../assets/images/Main/Benefits/delivery.svg';

export const Delivery = () => {
    return (
        <div className="benefits__delivery">
            <img src={deliveryImage} alt="Delivery" className="benefits__image" />
            <div>Quick delivery</div>
        </div>
    );
};
