import React from 'react';
import adImage from "../../../images/Main/advertizing.svg"

const Advertizing = () => {
    return (
        <div className="advertizing">
            <img src={adImage} alt="Advertizing" className="advertizing__image"/>
        </div>
    );
};

export default Advertizing;