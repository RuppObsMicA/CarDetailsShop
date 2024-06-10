import React, {useEffect, useState} from 'react';
import crossClose from "../../../../../images/Main/MainCatalog/crossClose.png";

const MainSearch = ({hideContent, selectedProduct, products}) => {



    return (
        <div className="catalog__main-search">

            <div className="catalog__name-and-exit">
                <div>{selectedProduct}</div>
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

export default MainSearch;