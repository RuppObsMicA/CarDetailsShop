import { SubmitHandler, useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import bcrypt from 'bcryptjs';

import { Product, ProductFormValues } from './AdminProfilePages/CreateNewProduct';
import { createNewProduct } from '../../api/FetchMethods/Profiles/admin/admin';
import { setOfProductTypesAndAttributes } from '../../utils/constants';
import {
    fetchUserDataById,
    updatePassword,
    updatePersonalData,
} from '../../api/FetchMethods/Profiles/PersonalData/personalData';
import { useAppSelector } from '../../store/hooks';
import {
    ChangePersonalDataForm,
    PersonalDataEditProps,
} from './GeneralPagesForAllProfiles/PersonalData/PersonalDataEdit';
import { Loader } from '../../components/CustomComponents/Loader/Loader';
import { UserData } from './GeneralPagesForAllProfiles/PersonalData/PersonalData';
import { ChangePasswordForm } from './GeneralPagesForAllProfiles/PersonalData/ChangePassword';
import { fetchOrdersByUserId } from '../../api/FetchMethods/Profiles/Orders/orders';
import { FetchedOrder } from './GeneralPagesForAllProfiles/Order/OrdersByUser';

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

export const useUpdatePersonalData = ({ user }: PersonalDataEditProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ChangePersonalDataForm>();

    const userId = useAppSelector((state) => state.auth.id);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [formData, setFormData] = useState<ChangePersonalDataForm>({
        username: user.username,
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
        password: '',
    });

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: (data: ChangePersonalDataForm) => {
            return updatePersonalData(data, userId);
        },
    });

    const updateData: SubmitHandler<ChangePersonalDataForm> = async (
        data: ChangePersonalDataForm,
    ) => {
        mutate(data, {
            onSuccess: (responseData) => {
                setNotificationMessage(responseData.message);
                if (responseData.message === 'Your profile was updated successfully') {
                    reset();
                }
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
        formData,
        setFormData,
        updateData,
    };
};

export const useFetchPersonalData = () => {
    const userId = useAppSelector((state) => state.auth.id);
    const [userData, setUserData] = useState<UserData>();
    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    const { isPending, isError, error, data } = useQuery({
        queryKey: ['fetchUserData'],
        queryFn: () => fetchUserDataById(userId),
    });

    useEffect(() => {
        if (data) {
            setUserData(data);
        }
    }, [userId, data]);

    const handleEditModeChange = () => {
        setIsEditMode((prevState) => !prevState);
    };

    return { userData, isEditMode, handleEditModeChange, isPending, isError, error };
};

export const useUpdatePassword = () => {
    const {
        register,
        reset,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<ChangePasswordForm>();

    const userId = useAppSelector((state) => state.auth.id);
    const [notificationMessage, setNotificationMessage] = useState('');

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: (data: ChangePasswordForm) => {
            return updatePassword(data, userId);
        },
    });

    const updatePasswordSubmit: SubmitHandler<ChangePasswordForm> = async (
        data: ChangePasswordForm,
    ) => {
        const salt = bcrypt.genSaltSync(10); // might be in a separate place
        data.password = bcrypt.hashSync(data.password, salt);

        mutate(data, {
            onSuccess: (responseData) => {
                setNotificationMessage(responseData.message);

                if (responseData.message === 'Your password was updated successfully') {
                    reset();
                }
            },
        });
    };

    return {
        isPending,
        isError,
        error,
        updatePasswordSubmit,
        register,
        errors,
        watch,
        handleSubmit,
        notificationMessage,
    };
};

export const useOrdersByUser = () => {
    const [orders, setOrders] = useState<FetchedOrder[]>();
    const userId = useAppSelector((state) => state.auth.id);

    const { isPending, isError, error, data } = useQuery({
        queryKey: ['fetchOrdersDataByUserId'],
        queryFn: () => fetchOrdersByUserId(userId),
    });

    useEffect(() => {
        if (data && Array.isArray(data)) {
            setOrders(data);
        }
    }, [userId, data]);

    return { isPending, isError, error, orders };
};
