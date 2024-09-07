import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { useAppDispatch } from '../../store/hooks';
import { getAuthToken } from '../../utils/localStorage';
import { fetchVerifyToken } from '../../utils/FetchMethods/Authorization/authorization';
import { authActions } from '../../store/auth-slice';

export const useVerifyToken = () => {
    const dispatch = useAppDispatch();

    const token: string | null = getAuthToken();

    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['initialAuth'],
        queryFn: fetchVerifyToken,
        enabled: token !== null,
    });

    if (data && token) {
        dispatch(
            authActions.login({
                token,
                role: data.user.role,
                id: data.user.id,
                fullName: data.user.fullname,
            }),
        );
    }

    return { isLoading, isError, error };
};
