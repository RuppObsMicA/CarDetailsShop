import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { cartActions, CartItem, updateDatabaseCart } from '../../store/cart-slice';
import { fetchCartData, fetchConfirmOrder } from '../../api/FetchMethods/Cart/cart';
import { orderedProducts } from '../../store/orderedProducts-slice';
import { getCart } from '../../utils/localStorage';
import { ProductInCartProps } from './ProductInCart/ProductInCart';
import { NewOrder, ProductsIdsAndTypes, FormData } from './ConfirmOrder/ConfirmOrder';

export const useFetchCartData = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    const userId = useAppSelector((state) => state.auth.id);

    const dispatch = useAppDispatch();
    const [localCartItems, setLocalCartItems] = useState<CartItem[]>([]);

    const { isLoading, isError, error, data } = useQuery({
        // Fix it to send a request only when a user is authorized
        queryKey: ['fetchCartData'],
        queryFn: () => fetchCartData(userId.toString()),
        enabled: isAuth,
    });

    useEffect(() => {
        dispatch(orderedProducts.cleanProducts());
        if (!isAuth) {
            const localCart = getCart();
            if (localCart) {
                setLocalCartItems(localCart);
                dispatch(cartActions.replaceCart(localCart));
            }
        } else if (data) {
            setLocalCartItems(data);
            dispatch(cartActions.replaceCart(data));
        }
    }, [isAuth, data]);

    const itemsInCart = useAppSelector((state) => state.cart.items);
    const totalPrice = itemsInCart.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0,
    );

    return { isLoading, isError, error, totalPrice, itemsInCart, isAuth };
};

export const useChangeQuantity = ({ product }: ProductInCartProps) => {
    const userId = useAppSelector((state) => state.auth.id);
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    const dispatch = useAppDispatch();

    const increaseCount = () => {
        dispatch(
            updateDatabaseCart({
                cartItem: product,
                userId,
                isAuth,
                isIncrease: true,
            }),
        );
    };

    const decreaseCount = () => {
        dispatch(
            updateDatabaseCart({
                cartItem: product,
                userId,
                isAuth,
                isIncrease: false,
            }),
        );
    };

    return { decreaseCount, increaseCount, dispatch };
};

export const useSubmitOrder = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: (data: NewOrder) => {
            return fetchConfirmOrder(data);
        },
    });
    const [notificationMessage, setNotificationMessage] = useState('');

    const clientId = useAppSelector((state) => state.auth.id);
    const clientName = useAppSelector((state) => state.auth.fullName);
    const productsToOrder: CartItem[] = useAppSelector(
        (state) => state.orderedProducts.items,
    );

    const totalPrice = productsToOrder.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0,
    );
    const listOfProductsIdsAndTypes: ProductsIdsAndTypes[] = productsToOrder.reduce<
        ProductsIdsAndTypes[]
    >((acc, product) => {
        return [
            ...acc,
            {
                productId: product.id,
                productType: product.productType,
                quantity: product.quantity,
            },
        ];
    }, []);
    const submitOrder: SubmitHandler<FormData> = (data) => {
        const newOrder: NewOrder = {
            clientId: clientId,
            clientName: clientName,
            address: data.address,
            price: totalPrice,
            productsIdsAndTypes: listOfProductsIdsAndTypes,
        };
        mutate(newOrder, {
            onSuccess: (responseData) => {
                setNotificationMessage(responseData.message);
                if (
                    responseData.message ===
                    'Your order was successfully received, our manager will reach out to you'
                ) {
                    reset();
                }
            },
            onError: () => {
                setNotificationMessage(
                    'Something went wrong during confirming order, please try again later',
                );
            },
        });
    };

    return {
        register,
        handleSubmit,
        errors,
        isPending,
        isError,
        error,
        notificationMessage,
        submitOrder,
        totalPrice,
        productsToOrder,
    };
};

export const useDebounce = (fn: () => void, delay: number) => {
    let timer: NodeJS.Timeout | null;
    return () => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn();
        }, delay);
    };
};
