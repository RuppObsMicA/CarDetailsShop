import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { setOfProductTypes } from '../../utils/constants';
import {
    fetchProductType,
    fetchSingleProduct,
} from '../../api/FetchMethods/Products/products';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { updateDatabaseCart } from '../../store/cart-slice';

export const useFetchProducts = () => {
    const [productName, setProductName] = useState<string>();
    const { product_type } = useParams<string>();
    const [notificationMessage, setNotificationMessage] = useState('');
    const [enableFetch, setEnableFetch] = useState<boolean>(false);

    useEffect(() => {
        const productType = setOfProductTypes.find(
            (elem) => elem.dataBaseTable === product_type,
        );
        if (productType) {
            setProductName(productType.name);
            setNotificationMessage('');
            setEnableFetch(true);
        } else {
            setNotificationMessage('Wrong product type, please choose one of proposed');
        }
    }, [product_type]);

    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['fetchProducts', product_type],
        queryFn: () => fetchProductType(product_type ?? ''),
        enabled: enableFetch,
    });

    return { productName, isLoading, isError, error, data, notificationMessage };
};

export const useFetchSingleProduct = () => {
    const userId = useAppSelector((state) => state.auth.id);
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [enableFetch, setEnableFetch] = useState(false);
    const { product_id, product_type } = useParams();
    const dispatch = useAppDispatch();

    const { isPending, isError, error, data } = useQuery({
        queryKey: ['fetchSingleProduct'],
        queryFn: () => fetchSingleProduct(product_type!, product_id!),
        enabled: enableFetch,
    });

    useEffect(() => {
        const productType = setOfProductTypes.find(
            (elem) => elem.dataBaseTable === product_type,
        );
        if (productType) {
            setNotificationMessage('');
            setEnableFetch(true);
        } else {
            setEnableFetch(false);
            setNotificationMessage('Wrong product type, please choose one of proposed');
        }
    }, [product_type]);

    useEffect(() => {
        if (data && 'message' in data) {
            console.log('Empty array');
            setNotificationMessage('The product does not exist');
            setEnableFetch(false);
        }
    }, [data]);

    const handleAddToCart = () => {
        if (data && 'id' in data) {
            dispatch(
                updateDatabaseCart({
                    cartItem: { ...data, productType: product_type! },
                    userId,
                    isAuth,
                    isIncrease: true,
                }),
            );
        }
    };

    return { isPending, isError, error, data, handleAddToCart, notificationMessage };
};
