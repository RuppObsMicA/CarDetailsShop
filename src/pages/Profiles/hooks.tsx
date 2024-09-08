import { SubmitHandler, useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { Product, ProductFormValues } from './AdminProfilePages/CreateNewProduct';
import { createNewProduct } from '../../api/FetchMethods/Profiles/admin/admin';
import { setOfProductTypesAndAttributes } from '../../utils/constants';

export const useCreateProduct = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProductFormValues>();

    const [selectedProduct, setSelectedProduct] = useState<Product>(
        setOfProductTypesAndAttributes[0],
    );

    const handleProductTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newProductType: string = event.target.value;
        const newSelectedProduct = setOfProductTypesAndAttributes.find(
            (elem: Product) => elem.productType === newProductType,
        );

        if (newSelectedProduct) {
            setSelectedProduct(newSelectedProduct);
        }
    };

    const [notificationMessage, setNotificationMessage] = useState('');

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: (data: ProductFormValues) => {
            return createNewProduct(data);
        },
    });

    const addNewProduct: SubmitHandler<ProductFormValues> = async (data) => {
        mutate(data, {
            onSuccess: () => {
                setNotificationMessage('The product was successfully created');
            },
            onError: () => {
                setNotificationMessage(
                    'An error occurred during creation of a new product. Please try again later.',
                );
            },
        });
    };

    return {
        isPending,
        isError,
        error,
        register,
        handleSubmit,
        errors,
        notificationMessage,
        selectedProduct,
        handleProductTypeChange,
        addNewProduct,
    };
};
