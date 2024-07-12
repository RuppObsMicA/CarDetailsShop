import React from 'react';
import { Link } from 'react-router-dom';

import { type FetchedProduct } from '../CatalogMainContent';

type ProductProps = {
    product: FetchedProduct;
    key: number;
};
export const Product = ({ product }: ProductProps) => {
    return (
        <li className="catalog__product">
            <Link to={product.id.toString()}>
                <h3 className="catalog__product-name">{product.name}</h3>
                <img
                    src={product.pictureURL}
                    alt={product.pictureURL}
                    className="catalog__product-image"
                />
                <h5 className="catalog__product-price">{`${product.price} $`}</h5>
            </Link>
        </li>
    );
};
