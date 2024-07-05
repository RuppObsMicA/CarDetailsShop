import {createSlice} from "@reduxjs/toolkit";

export type CartItem = {
    id: string;
    title: string;
    price: number;
    quantity: number;
};

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};


export const cartSlice = createSlice({
    name: 'cart-slice',
    initialState,
    reducers: {
        addToCart(
            state:CartState,
            action: {
                payload: {
                    id: string;
                    title: string;
                    price: number;
                }
            },
        ) {
            const itemIndex = state.items.findIndex(
                (item: CartItem) => item.id === action.payload.id,
            );
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity++;
            } else {
                state.items.push({...action.payload, quantity: 1});
            }
        },
        removeFromCart(state:CartState, action: {payload: string}) {
            const itemIndex = state.items.findIndex(
                (item:CartItem) => item.id === action.payload,
            );

            if (state.items[itemIndex].quantity === 1) {
                state.items.splice(itemIndex, 1);
            } else {
                state.items[itemIndex].quantity--;
            }
        },
    },
});

export const cartActions = cartSlice.actions;