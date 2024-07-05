import {configureStore} from "@reduxjs/toolkit";
import {cartSlice} from "./cart-slice";
import {authSlice} from "./auth-slice";
import {modalSlice} from "./modal-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
    modal: modalSlice.reducer,
  },
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

