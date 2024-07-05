import React, {ReactNode} from 'react';

const crossClose:string = require ("../../../../../images/Main/MainCatalog/crossClose.png");

type MainSearchProps = {
    hideContent: () => void;
    selectedProduct: {
        name: string;
        dataBaseTable: string;
    };
    products: ReactNode;
}

export const MainSearch = ({hideContent, selectedProduct, products}:MainSearchProps) => {



    return (
        <div className="catalog__main-search">

            <div className="catalog__name-and-exit">
                <div>{selectedProduct.name}</div>
                <img src={crossClose} alt="close" className="catalog__hide-content" onClick={hideContent}/>
            </div>

            <div className="catalog__search-dropdown">
                <input className="catalog__input" type="text"/>
                <input className="catalog__input" type="text"/>
                <input className="catalog__input" type="text"/>
            </div>

            <ul className="catalog__products">
                {products}
            </ul>
        </div>
    );
};