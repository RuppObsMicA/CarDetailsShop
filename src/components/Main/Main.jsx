import React, {useState} from 'react';
import MainCatalog from "./MainCatalog/MainCatalog";
import Advertizing from "./Advertizing/Advertizing";
import SmartSearch from "./SmartSearch/SmartSearch";
import Partners from "./Partners/Partners";
import Feedback from "./Feedback/Feedback";
import Benefits from "./Benefits/Benefits";
import Content from "./Content/Content";
import batteryImage from "../../images/Main/MainCatalog/battery.svg";
import tiresAndWheelsImage from "../../images/Main/MainCatalog/tiresAndWheels.svg";
import engineOilImage from "../../images/Main/MainCatalog/engineOil.svg";
import autoChemicalGoodsImage from "../../images/Main/MainCatalog/autoChemicalGoods.svg";
import toolsImage from "../../images/Main/MainCatalog/tools.svg";
import carBodyPartsImage from "../../images/Main/MainCatalog/carBodyParts.svg";

const Main = () => {

    const [isBatteryHidden, setIsBatteryHidden] = useState(true);
    const [isTiresAndWheelsHidden, setIsTiresAndWheelsHidden] = useState(true);
    const [isEngineOilHidden, setIsEngineOilHidden] = useState(true);
    const [isAutoChemicalGoodsHidden, setIsAutoChemicalGoodsHidden] = useState(true);
    const [isToolsHidden, setIsToolsHidden] = useState(true);
    const [isBodyPartsHidden, setIsBodyPartsHidden] = useState(true);

    const setOfProducts = [
        {name: "Battery", image: batteryImage, isHidden: isBatteryHidden, setIsHidden: setIsBatteryHidden},
        {name: "Tires And Wheels", image: tiresAndWheelsImage, isHidden: isTiresAndWheelsHidden, setIsHidden: setIsTiresAndWheelsHidden},
        {name: "Engine Oil", image: engineOilImage, isHidden: isEngineOilHidden, setIsHidden: setIsEngineOilHidden},
        {name: "Auto chemical goods", image: autoChemicalGoodsImage, isHidden: isAutoChemicalGoodsHidden, setIsHidden: setIsAutoChemicalGoodsHidden},
        {name: "Tools", image: toolsImage, isHidden: isToolsHidden, setIsHidden: setIsToolsHidden},
        {name: "Body parts", image: carBodyPartsImage, isHidden: isBodyPartsHidden, setIsHidden: setIsBodyPartsHidden}
    ];

    return (
        <div className="main">
            <MainCatalog setOfProducts={setOfProducts}/>
            <Content setOfProducts={setOfProducts}/>
            <Advertizing/>
            <SmartSearch/>
            <Partners/>
            <Feedback/>
            <Benefits/>
        </div>
    );
};

export default Main;