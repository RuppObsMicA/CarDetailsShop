import React from 'react';
import deliveryImage from '../../../../images/Main/Benefits/delivery.svg'

const Delivery = () => {
    return (
        <div className="benefits__delivery">
            <img src={deliveryImage} alt="Delivery"/>
            <div>Quick delivery</div>
        </div>
    );
};

export default Delivery;