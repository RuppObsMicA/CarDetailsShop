import React, {useEffect, useState} from 'react';
import arrowCatalogImage from "../../../images/Main/ArrowCatalog.svg"
import crossClose from "../../../images/Main/MainCatalog/crossClose.png"
import CatalogSideBar from "./CatalogSideBar/CatalogSideBar";
import MainSearch from "./MainSearch/MainSearch";

const Content = ({isContentActive, setIsContentActive}) => {

    const hideContent = () => {
        setIsContentActive(false);
    }

    return (
        <div className={isContentActive ? "catalog__content catalog__content-active" : "catalog__content"}>
            <div className="catalog__search-menu">
                <CatalogSideBar/>
                <MainSearch hideContent={hideContent}/>
            </div>

        </div>
    );
};

export default Content;