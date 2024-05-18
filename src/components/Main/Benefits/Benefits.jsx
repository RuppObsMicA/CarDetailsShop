import React from 'react';
import Delivery from "./Delivery/Delivery";
import Offers24And7 from "./Offers24And7/Offers24And7";
import Sales from "./Sales/Sales";

const Benefits = () => {
    return (
        <div className="benefits">
            <Delivery/>
            <Sales/>
            <Offers24And7/>
        </div>
    );
};

export default Benefits;