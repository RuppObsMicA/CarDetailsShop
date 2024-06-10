import React from 'react';
import salesImage from '../../../../images/Main/Benefits/sales.svg'

const Sales = () => {
    return (
        <div className="benefits__sales">
            <img src={salesImage} alt="Sales" className="benefits__image"/>
            <div>Sales</div>
        </div>
    );
};

export default Sales;