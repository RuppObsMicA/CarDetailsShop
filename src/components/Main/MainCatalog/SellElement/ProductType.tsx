import React from 'react';

type ProductTypeProps = {
    product: {
        image: string;
        name: string;
    };
    renderProduct: () => void;
}
export const ProductType = ({product, renderProduct}: ProductTypeProps) => {

    const {image, name} = product;

    // получить роутсы и развернуть новые роутсы в старые

    return (
        <li className="catalog__element" onClick={renderProduct}>
            <img src={image} alt={name} className="catalog__image"/>
            <div className="catalog__text">{name}</div>
        </li>
    );
};

