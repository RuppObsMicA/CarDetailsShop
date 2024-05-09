import React from 'react';
import batteryImage from "../../../../images/Main/MainCatalog/battery.svg";

const Battery = (props) => {

    function renderContent(){
        console.log(props.product)
    }

    return (
        <div className="main__main-catalog__battery"  onClick={renderContent}>
            <img src={batteryImage} alt="Battery"/>
            <div>Battery</div>
        </div>
    );
};

export default Battery;