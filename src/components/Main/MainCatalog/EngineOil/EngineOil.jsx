import React from 'react';
import engineOilImage from "../../../../images/Main/MainCatalog/engineOil.svg";

const EngineOil = (props) => {

    function renderContent(){
        console.log(props.product)
    }

    return (
        <div className="main__main-catalog__engine-oil" onClick={renderContent}>
            <img src={engineOilImage} alt="Engine Oil"/>
            <div>Engine Oil</div>
        </div>
    );
};

export default EngineOil;