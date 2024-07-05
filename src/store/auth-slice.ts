import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {ResponseSignInSuccess} from "../components/Profiles/SignUp-SignIn/SignIn/SignInPage";

type InitialState = {
    isAuth: boolean;
    role: string;
}

const initialState:InitialState = {
    isAuth: false,
    role: 'none',
};

export const authSlice = createSlice({
    name: 'auth-slice',
    initialState,
    reducers : {
        login (state:InitialState, action: PayloadAction<ResponseSignInSuccess>){
            state.isAuth = true;
            state.role = action.payload.role;
            localStorage.setItem('token', action.payload.token);
        },
        logout(state:InitialState){
            state.isAuth = false;
            state.role = 'none';
            localStorage.removeItem('token');
        },
    },
})

export const authActions = authSlice.actions;
