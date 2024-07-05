import React from 'react';
import offers24and7Image from '../../../../images/Main/Benefits/offers24And7.svg';

export const Offers24And7 = () => {
    return (
        <div className="benefits__offers24and7">
            <img src={offers24and7Image} alt="Offers 24/7" className="benefits__image"/>
            <div>Offers 24/7</div>
        </div>
    );
};
