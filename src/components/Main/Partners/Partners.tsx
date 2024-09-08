import React from 'react';

// Pictures
import partnersImage from '../../../assets/images/Main/partners.svg';

export const Partners = () => {
    return (
        <div className="partners">
            <div>Our partners</div>
            <img src={partnersImage} alt="Our partners" className="partners__image" />
        </div>
    );
};
