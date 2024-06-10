import React, {useState} from 'react';
const SellElement = ({product, renderProduct}) => {

    const {image, name} = product;

    // получить роутсы и развернуть новые роутсы в старые


    return (
        <li className="catalog__element" onClick={renderProduct}>
            <img src={image} alt={name} className="catalog__image"/>
            <div className="catalog__text">{name}</div>
        </li>
    );
};

export default SellElement;