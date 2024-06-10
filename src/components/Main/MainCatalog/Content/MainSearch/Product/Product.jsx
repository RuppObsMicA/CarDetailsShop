import React from 'react';

const Product = ({product}) => {

    console.log("In product " + product.pictureURL)

    // получить роутсы и развернуть новые роутсы в старые

    return (
        <li className="catalog__product">
            <h3 className="catalog__product-name">{product.name}</h3>
            <img src={product.pictureURL} alt={product.pictureURL} className="catalog__product-image"/>
            <h5 className="catalog__product-price">{`${product.price} $`}</h5>

        </li>
    );
};

export default Product;