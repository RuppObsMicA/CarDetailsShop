import React from 'react';

import '../ProfileStyles.scss';
import { useCreateProduct } from '../hooks';
import { Notification } from '../../../components/CustomComponents/Notification/Notification';
import { Error } from '../../../components/CustomComponents/Error/Error';
import { Loader } from '../../../components/CustomComponents/Loader/Loader';

export type Product = {
    productType: string;
    productAttribute: string;
};

export interface ProductFormValues {
    type: string;
    name: string;
    image: FileList;
    price: number;
    productAttribute: number;
    description: string;
    brands: string;
}

export const CreateNewProduct = () => {
    const {
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
    } = useCreateProduct();

    if (isPending) {
        return <Loader />;
    }

    return (
        <div className="profile-admin">
            <div>
                {notificationMessage && <Notification message={notificationMessage} />}
                {isError && error && <Error message={error.message} />}
                <form id="createNewProductForm" onSubmit={handleSubmit(addNewProduct)}>
                    <div>
                        <label htmlFor="type">Choose a product type:</label>
                        <select onChange={handleProductTypeChange}>
                            <option value="batteries">Batteries</option>
                            <option value="tires_and_wheels">Tires and Wheels</option>
                            <option value="engine_oil">Engine Oil</option>
                            <option value="auto_chemical_goods">
                                Auto chemical goods
                            </option>
                            <option value="tools">Tools</option>
                            <option value="body_parts">Body parts</option>
                        </select>
                        {errors.type && <span>{errors.type.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="name">Product title:</label>
                        <input
                            type="text"
                            {...register('name', {
                                required: 'Product title is required',
                            })}
                        />
                        {errors.name && <span>{errors.name.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="image">Product image:</label>
                        <input
                            type="file"
                            {...register('image', {
                                required: 'Product image is required',
                            })}
                            accept="image/*"
                        />
                        {errors.image && <span>{errors.image.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="price">Product price:</label>
                        <input
                            type="number"
                            {...register('price', {
                                required: 'Product price is required',
                                min: { value: 0, message: 'Price must be positive' },
                            })}
                            step="0.01"
                        />
                        {errors.price && <span>{errors.price.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="productAttribute">
                            Product {selectedProduct.productAttribute}:
                        </label>
                        <input
                            type="number"
                            {...register(`productAttribute`, {
                                required: 'Product type is required',
                            })}
                        />
                        {errors.productAttribute && (
                            <span>{errors.productAttribute.message}</span>
                        )}
                    </div>

                    <div>
                        <label htmlFor="description">Product description:</label>
                        <input
                            type="text"
                            {...register('description', {
                                required: 'Product description is required',
                            })}
                        />
                        {errors.description && <span>{errors.description.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="brands">Brands:</label>
                        <input
                            type="text"
                            {...register('brands', { required: 'Brands are required' })}
                        />
                        {errors.brands && <span>{errors.brands.message}</span>}
                    </div>

                    <div>
                        <button type="submit">Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
