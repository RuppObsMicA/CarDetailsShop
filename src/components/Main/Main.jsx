import React, {useState} from 'react';
import MainCatalog from "./MainCatalog/MainCatalog";
import Advertizing from "./Advertizing/Advertizing";
import SmartSearch from "./SmartSearch/SmartSearch";
import Partners from "./Partners/Partners";
import Feedback from "./Feedback/Feedback";
import Benefits from "./Benefits/Benefits";

// Pictures
import batteryImage from "../../images/Main/MainCatalog/battery.svg";
import tiresAndWheelsImage from "../../images/Main/MainCatalog/tiresAndWheels.svg";
import engineOilImage from "../../images/Main/MainCatalog/engineOil.svg";
import autoChemicalGoodsImage from "../../images/Main/MainCatalog/autoChemicalGoods.svg";
import toolsImage from "../../images/Main/MainCatalog/tools.svg";
import carBodyPartsImage from "../../images/Main/MainCatalog/carBodyParts.svg";

const Main = () => {

    const setOfProducts = [
        {name: "Battery", image: batteryImage},
        {name: "Tires And Wheels", image: tiresAndWheelsImage},
        {name: "Engine Oil", image: engineOilImage},
        {name: "Auto chemical goods", image: autoChemicalGoodsImage},
        {name: "Tools", image: toolsImage},
        {name: "Body parts", image: carBodyPartsImage}
    ];

    return (
        <div className="main">
            <MainCatalog setOfProducts={setOfProducts}/>
            <Advertizing/>
            <SmartSearch/>
            <Partners/>
            <Feedback/>
            <Benefits/>
        </div>
    );
};

export default Main;