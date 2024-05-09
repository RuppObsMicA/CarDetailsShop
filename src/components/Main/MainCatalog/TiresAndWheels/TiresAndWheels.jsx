import React from 'react';
import tiresAndWheelsImage from "../../../../images/Main/MainCatalog/tiresAndWheels.svg";

const TiresAndWheels = (props) => {

    function renderContent(){
        console.log(props.product)
    }

    return (
        <div className="main__main-catalog__tires-and-wheels" onClick={renderContent}>
            <img src={tiresAndWheelsImage} alt="Tires and Wheels"/>
            <div>Tires and Wheels</div>
        </div>
    );
};

export default TiresAndWheels;