import React from 'react';
import crossClose from "../../../../images/Main/MainCatalog/crossClose.png";

const MainSearch = ({hideContent}) => {

    const listOfRenderedProducts = () => {

    }

    return (
        <div className="catalog__main-search">

            <div className="catalog__name-and-exit">
                <div>Batteries</div>
                <img src={crossClose} alt="close" className="catalog__hide-content" onClick={hideContent}/>
            </div>

            <div className="catalog__search-dropdown">
                <input className="catalog__input" type="text"/>
                <input className="catalog__input" type="text"/>
                <input className="catalog__input" type="text"/>
            </div>

            <div className="catalog__products">
                {listOfRenderedProducts}
            </div>
        </div>
    );
};

export default MainSearch;