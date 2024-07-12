import React from 'react';
import { Link } from 'react-router-dom';

type ProductTypeProps = {
    product: {
        image: string;
        name: string;
        dataBaseTable: string;
    };
};
export const ProductType = ({ product }: ProductTypeProps) => {
    const { image, name, dataBaseTable } = product;

    return (
        <li className="catalog__element">
            <Link to={dataBaseTable}>
                <img src={image} alt={name} className="catalog__image" />
                <div className="catalog__text">{name}</div>
            </Link>
        </li>
    );
};
