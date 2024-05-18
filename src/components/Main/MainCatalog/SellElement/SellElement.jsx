import React, {useState} from 'react';
const SellElement = ({product, renderProduct}) => {

    const {image, name} = product;

    return (
        <div className="catalog__element" onClick={() => renderProduct(product)}>
            <img src={image} alt={name} className="catalog__image"/>
            <div className="catalog__text">{name}</div>
        </div>
    );
};

export default SellElement;