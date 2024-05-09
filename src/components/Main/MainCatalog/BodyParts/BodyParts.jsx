import React from 'react';
import bodyPartsImage from "../../../../images/Main/MainCatalog/carBodyParts.svg";

const BodyParts = (props) => {

    function renderContent(){
        console.log(props.product)
    }
    return (
        <div className="main__main-catalog__body-parts" onClick={renderContent}>
            <img src={bodyPartsImage} alt="Body parts"/>
            <div>Body Parts</div>
        </div>
    );
};

export default BodyParts;