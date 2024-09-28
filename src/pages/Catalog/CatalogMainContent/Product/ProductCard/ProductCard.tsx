import React from 'react';

import { Loader } from '../../../../../components/CustomComponents/Loader/Loader';
import { Error } from '../../../../../components/CustomComponents/Error/Error';
import './ProductCard.scss';
import { Notification } from '../../../../../components/CustomComponents/Notification/Notification';
import { useFetchSingleProduct } from '../../../hooks';

export const ProductCard = () => {
    const { isPending, isError, error, data, handleAddToCart, notificationMessage } =
        useFetchSingleProduct();

    if (isPending) {
        return <Loader />;
    }

    return (
        <div className="container">
            {notificationMessage && <Notification message={notificationMessage} />}
            {isError && error && <Error message={error.message} />}
            {data && 'id' in data ? (
                <div>
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
            ) : null}
        </div>
    );
};
