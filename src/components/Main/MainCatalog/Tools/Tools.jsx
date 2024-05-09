import React from 'react';
import toolsImage from "../../../../images/Main/MainCatalog/tools.svg";

const Tools = (props) => {

    function renderContent(){
        console.log(props.product)
    }

    return (
        <div className="main__main-catalog__tools" onClick={renderContent}>
            <img src={toolsImage} alt="Tools"/>
            <div>Tools</div>
        </div>
    );
};

export default Tools;