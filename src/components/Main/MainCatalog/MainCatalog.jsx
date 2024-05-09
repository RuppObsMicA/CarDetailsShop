import React, {useState} from 'react';
import SellElement from "./SellElement/SellElement";

//Pictures
import batteryImage from "../../../images/Main/MainCatalog/battery.svg";
import tiresAndWheelsImage from "../../../images/Main/MainCatalog/tiresAndWheels.svg";
import engineOilImage from "../../../images/Main/MainCatalog/engineOil.svg";
import autoChemicalGoodsImage from "../../../images/Main/MainCatalog/autoChemicalGoods.svg";
import toolsImage from "../../../images/Main/MainCatalog/tools.svg";
import carBodyPartsImage from "../../../images/Main/MainCatalog/carBodyParts.svg";

const MainCatalog = ({setOfProducts}) => {

    console.log(setOfProducts);

    const productsToRender = setOfProducts.map((product) => {
        return <SellElement product={product}/>
    })

    return (
        <div className="main__main-catalog">
            {productsToRender}
        </div>
    );
};

export default MainCatalog;