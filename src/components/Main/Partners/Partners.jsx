import React from 'react';
import partnersImage from '../../../images/Main/partners.svg';

const Partners = () => {
    return (
        <div className="main__partners">
            <div>Our partners</div>
            <img src={partnersImage} alt="Our partners"/>
        </div>
    );
};

export default Partners;