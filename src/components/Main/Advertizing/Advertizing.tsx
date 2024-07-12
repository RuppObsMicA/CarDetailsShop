import React from 'react';

import adImage from '../../../assets/images/Main/advertizing.svg';

export const Advertizing = () => {
    return (
        <div className="advertizing">
            <img
                src={adImage}
                alt="Advertizing"
                className="advertizing__image"
            />
        </div>
    );
};
