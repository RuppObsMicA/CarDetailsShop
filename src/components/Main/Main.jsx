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

// Styles
import "./MainStyles.scss"


const Main = () => {

    const setOfProducts = [
        {name: "Battery", image: batteryImage, dataBaseTable: "batteries"},
        {name: "Tires And Wheels", image: tiresAndWheelsImage, dataBaseTable: "tires_and_wheels"},
        {name: "Engine Oil", image: engineOilImage, dataBaseTable: "engine_oil"},
        {name: "Auto chemical goods", image: autoChemicalGoodsImage, dataBaseTable: "auto_chemical_goods"},
        {name: "Tools", image: toolsImage, dataBaseTable: "tools"},
        {name: "Body parts", image: carBodyPartsImage, dataBaseTable: "body_parts"}
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