import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { fetchSingleProduct } from '../../../../../utils/fetchMethods';
import { Loader } from '../../../../../components/CustomComponents/Loader/Loader';
import { Error } from '../../../../../components/CustomComponents/Error/Error';
import './ProductCard.scss';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { updateDatabaseCart } from '../../../../../store/cart-slice';

export const ProductCard = () => {
    const userId = useAppSelector((state) => state.auth.id);
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    const { product_id } = useParams();
    const { product_type } = useParams();
    const dispatch = useAppDispatch();

    const { isPending, isError, error, data } = useQuery({
        queryKey: ['fetchSingleProduct'],
        queryFn: () => fetchSingleProduct(product_type!, product_id!),
        enabled: !!product_type && !!product_id,
    });

    if (isPending) {
        return <Loader />;
    }
    if (isError) {
        return <Error message={error.message} />;
    }

    const handleAddToCart = () => {
        dispatch(
            updateDatabaseCart({
                cartItem: { ...data, productType: product_type! },
                userId,
                isAuth,
                isIncrease: true,
            }),
        );
    };

    return (
        <div className="container">
            <img src={data.pictureURL} alt={data.name} className="image" />
            <h1 className="title">{data.name}</h1>
            <p className="description">{data.description}</p>
            <p className="info">
                <strong>Brands:</strong> {data.brands}
            </p>
            <p className="info">
                <strong>Power:</strong> {data.power}W
            </p>
            <p className="info">
                <strong>Product Number:</strong> {data.product_number}
            </p>
            <p className="price">${data.price}</p>
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    );
};
