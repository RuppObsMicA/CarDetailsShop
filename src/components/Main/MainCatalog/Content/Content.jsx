import React, {useEffect, useState} from 'react';
import CatalogSideBar from "./CatalogSideBar/CatalogSideBar";
import MainSearch from "./MainSearch/MainSearch";

const Content = ({isContentActive, setIsContentActive, selectedProduct, products}) => {

    const hideContent = () => {
        setIsContentActive(false);
    }

    return (
        <div className={isContentActive ? "catalog__content catalog__content-active" : "catalog__content"}>

            <div className="catalog__search-menu">
                <CatalogSideBar/>
                <MainSearch
                    hideContent={hideContent}
                    selectedProduct={selectedProduct}
                    products={products}
                />
            </div>

        </div>
    );
};

export default Content;