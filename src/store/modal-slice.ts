import {createSlice} from "@reduxjs/toolkit";

type InitialState = {
    isModalCheckoutOpen: boolean;
}

const initialState:InitialState = {
    isModalCheckoutOpen: false,
};


export const modalSlice = createSlice({
    name: 'modal-slice',
    initialState,
    reducers : {
        toggleCheckoutModal(state: InitialState){
            state.isModalCheckoutOpen = !state.isModalCheckoutOpen;
        }
    }
})

export const modalActions = modalSlice.actions;
