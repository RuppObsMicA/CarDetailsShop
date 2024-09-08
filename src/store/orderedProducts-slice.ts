import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartItem } from './cart-slice';

type OrderedProductsState = {
    items: CartItem[];
};

const initialState: OrderedProductsState = {
    items: [],
};

export const orderedProductsSlice = createSlice({
    name: 'orderedProducts',
    initialState,
    reducers: {
        addProductToOrder(state: OrderedProductsState, action: PayloadAction<CartItem>) {
            const itemIndex = state.items.findIndex(
                (item: CartItem) => item.id === action.payload.id,
            );
            console.log(itemIndex);
            if (itemIndex < 0) {
                state.items.push(action.payload);
            }
        },
        removeProductFromOrder(
            state: OrderedProductsState,
            action: PayloadAction<number>,
        ) {
            const itemIndex = state.items.findIndex(
                (item: CartItem) => item.id === action.payload,
            );
            state.items.splice(itemIndex, 1);
        },
        cleanProducts(state: OrderedProductsState) {
            state.items = [];
        },
    },
});

export const orderedProducts = orderedProductsSlice.actions;
