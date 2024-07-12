import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { ResponseSignInSuccess } from '../pages/SignUp-SignIn/SignIn/SignIn';

type InitialState = {
    isAuth: boolean;
    role: string;
    id: number;
    fullName: string;
};

const initialState: InitialState = {
    isAuth: false,
    role: 'none',
    id: 0,
    fullName: 'Guest',
};

export const authSlice = createSlice({
    name: 'auth-slice',
    initialState,
    reducers: {
        login(
            state: InitialState,
            action: PayloadAction<ResponseSignInSuccess>,
        ) {
            state.isAuth = true;
            state.role = action.payload.role;
            state.id = action.payload.id;
            state.fullName = action.payload.fullName;
            localStorage.setItem('token', action.payload.token);
        },
        logout(state: InitialState) {
            state.isAuth = false;
            state.role = 'none';
            state.id = 0;
            localStorage.removeItem('token');
        },
    },
});

export const authActions = authSlice.actions;
