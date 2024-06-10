import React from 'react';
import partnersImage from '../../../images/Main/partners.svg';

const Partners = () => {
    return (
        <div className="partners">
            <div>Our partners</div>
            <img src={partnersImage} alt="Our partners" className="partners__image"/>
        </div>
    );
};

export default Partners;