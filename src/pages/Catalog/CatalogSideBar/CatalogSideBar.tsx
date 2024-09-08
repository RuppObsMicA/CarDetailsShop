import React from 'react';
import { Link } from 'react-router-dom';

import { setOfProductTypes } from '../../../utils/constants';

export const CatalogSideBar = () => {
    return (
        <aside className="catalog__side-menu">
            <div className="catalog__header">
                <button>Catalog</button>
                <button>Brands</button>
            </div>

            <div className="catalog__products-titles">
                {setOfProductTypes.map((productType) => (
                    <Link key={productType.name} to={`/${productType.dataBaseTable}`}>
                        <p className="catalog__product-element">{productType.name}</p>
                    </Link>
                ))}
            </div>
        </aside>
    );
};
