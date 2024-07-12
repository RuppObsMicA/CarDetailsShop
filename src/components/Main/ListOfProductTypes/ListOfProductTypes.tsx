import React from 'react';

import { ProductType } from './ProductType/ProductType';
import { Product } from '../../../pages/Catalog/CatalogMainContent/Product/Product';
import { setOfProductTypes } from '../../../utils/constants';

export type Product = {
    name: string;
    dataBaseTable: string;
    image: string;
};

export const ListOfProductTypes = () => {
    return (
        <div className="catalog">
            <ul className="catalog__elements">
                {setOfProductTypes.map((product: Product) => (
                    <ProductType key={product.name} product={product} />
                ))}
            </ul>
        </div>
    );
};
