import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { fetchProductType } from '../../../api/FetchMethods/Products/products';
import { Loader } from '../../../components/CustomComponents/Loader/Loader';
import { Error } from '../../../components/CustomComponents/Error/Error';
import { Product } from './Product/Product';
import { setOfProductTypes } from '../../../utils/constants';

type Params = {
    product_type: string;
};

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
    const [productName, setProductName] = useState<string>();
    const { product_type } = useParams<Params>();

    console.log(product_type);

    useEffect(() => {
        const productType = setOfProductTypes.find(
            (elem) => elem.dataBaseTable === product_type,
        );
        if (productType) {
            setProductName(productType.name);
        }
    }, [product_type]);

    const { isPending, isError, error, data } = useQuery({
        queryKey: ['fetchProducts', product_type],
        queryFn: () => fetchProductType(product_type ?? ''),
        enabled: !!product_type,
    });

    if (isPending) {
        return <Loader />;
    }

    if (isError) {
        return <Error message={error.message} />;
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

            <ul className="catalog__products">
                {data.map((product: FetchedProduct) => (
                    <Product key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
};
