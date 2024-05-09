import React from 'react';
import autoChemicalGoods from "../../../../images/Main/MainCatalog/autoChemicalGoods.svg"

const AutoChemicalGoods = (props) => {

    function renderContent(){
        console.log(props.product)
    }

    return (
        <div className="main__main-catalog__auto-chemical-goods" onClick={renderContent}>
            <img src={autoChemicalGoods} alt="Auto chemical goods"/>
            <div>Auto chemical goods</div>
        </div>
    );
};

export default AutoChemicalGoods;