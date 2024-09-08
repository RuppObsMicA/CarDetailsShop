import React from 'react';

import { Loader } from '../../../components/CustomComponents/Loader/Loader';
import { Error } from '../../../components/CustomComponents/Error/Error';
import { Product } from './Product/Product';
import { useFetchProducts } from '../hooks';
import { Notification } from '../../../components/CustomComponents/Notification/Notification';

export type FetchedProduct = {
    id: number;
    name: string;
    price: number;
    power: number;
    pictureURL: string;
    product_number: string;
    brands: string;
    description: string;
    quantity?: number;
};

export const CatalogMainContent = () => {
    const { productName, isLoading, isError, error, data, notificationMessage } =
        useFetchProducts();

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="catalog__main-search">
            <div className="catalog__name-and-exit">
                <div>{productName}</div>
            </div>

            {/*the part can be removed*/}
            <div className="catalog__search-dropdown">
                <input className="catalog__input" type="text" />
                <input className="catalog__input" type="text" />
                <input className="catalog__input" type="text" />
            </div>
            {notificationMessage && <Notification message={notificationMessage} />}
            {isError && error && <Error message={error.message} />}
            {data && data.length > 0 ? (
                <ul className="catalog__products">
                    {data.map((product: FetchedProduct) => (
                        <Product key={product.id} product={product} />
                    ))}
                </ul>
            ) : (
                <Notification message="No products available" />
            )}
        </div>
    );
};
