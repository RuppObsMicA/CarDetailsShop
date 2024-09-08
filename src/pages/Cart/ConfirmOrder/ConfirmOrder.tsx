import React from 'react';

import { Button } from '../../../components/CustomComponents/Button/Button';
import { Input } from '../../../components/CustomComponents/Input/Input';
import { Error } from '../../../components/CustomComponents/Error/Error';
import { Notification } from '../../../components/CustomComponents/Notification/Notification';
import { Loader } from '../../../components/CustomComponents/Loader/Loader';
import { useSubmitOrder } from '../hooks';

export type NewOrder = {
    clientId: number;
    clientName: string;
    address: string;
    price: number;
    productsIdsAndTypes: ProductsIdsAndTypes[];
};

export type ProductsIdsAndTypes = {
    productId: number;
    productType: string;
    quantity: number;
};

export type FormData = {
    address: string;
};

export const ConfirmOrder = () => {
    const {
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
    } = useSubmitOrder();

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
            {notificationMessage && <Notification message={notificationMessage} />}
            {isError && error && <Error message={error.message} />}
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
