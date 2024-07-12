import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

import { useAppSelector } from '../../../store/hooks';
import { Button } from '../../../components/CustomComponents/Button/Button';
import { Input } from '../../../components/CustomComponents/Input/Input';
import { CartItem } from '../../../store/cart-slice';
import { fetchConfirmOrder } from '../../../utils/fetchMethods';
import { Error } from '../../../components/CustomComponents/Error/Error';
import { Notification } from '../../../components/CustomComponents/Notification/Notification';
import { Loader } from '../../../components/CustomComponents/Loader/Loader';

export type NewOrder = {
    clientId: number;
    clientName: string;
    address: string;
    price: number;
    productsIdsAndTypes: ProductsIdsAndTypes[];
};

type ProductsIdsAndTypes = {
    productId: number;
    productType: string;
};

type FormData = {
    address: string;
};

export const ConfirmOrder = () => {
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

    console.log(productsToOrder);
    const totalPrice = productsToOrder.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0,
    );
    const listOfProductsIdsAndTypes: ProductsIdsAndTypes[] =
        productsToOrder.reduce<ProductsIdsAndTypes[]>((acc, product) => {
            return [
                ...acc,
                { productId: product.id, productType: product.productType },
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
                    'Your order was successfully receiver, our manager will reach out to you'
                ) {
                    reset();
                }
            },
        });
    };

    if (!productsToOrder.length) {
        return <h1>No chosen products</h1>;
    }
    if (isPending) {
        return <Loader />;
    }

    return (
        <div>
            {productsToOrder.map((elem) => (
                <div key={elem.id}>
                    <h1>{elem.name}</h1>
                    <h2>{elem.quantity}</h2>
                </div>
            ))}
            {notificationMessage && (
                <Notification message={notificationMessage} />
            )}
            {isError && <Error message={error.message} />}
            <form onSubmit={handleSubmit(submitOrder)}>
                <div>
                    <Input
                        type="text"
                        label="Address"
                        name="address"
                        placeholder="Enter address"
                        register={register}
                        validation={{
                            required: 'This is a required field',
                        }}
                        errors={errors}
                    />
                </div>
                <div>
                    <Button text="Confirm" />
                </div>
            </form>
        </div>
    );
};
