import React, {ReactNode} from 'react';
import {CatalogSideBar} from "./CatalogSideBar/CatalogSideBar";
import {MainSearch} from "./MainSearch/MainSearch";

type ContentProps = {
    isContentActive: boolean;
    setIsContentActive: (value: boolean) => void;
    selectedProduct: {
        name: string;
        dataBaseTable: string;
    };
    products: ReactNode;
}

export const Content = ({isContentActive, setIsContentActive, selectedProduct, products}: ContentProps) => {

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