import React from 'react';

const CatalogSideBar = () => {
    return (
        <aside className="catalog__side-menu">

            <div className="catalog__header">
                <button>Catalog</button>
                <button>Brands</button>
            </div>

            <div className="catalog__products-titles">
                <p className="catalog__product-element">Batteries</p>
                <p className="catalog__product-element">Batteries</p>
                <p className="catalog__product-element">Batteries</p>
                <p className="catalog__product-element">Batteries</p>
                <p className="catalog__product-element">Batteries</p>
                <p className="catalog__product-element">Batteries</p>
            </div>
        </aside>
    );
};

export default CatalogSideBar;