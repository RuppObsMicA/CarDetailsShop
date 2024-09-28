import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { updateCart } from '../api/FetchMethods/Cart/cart';
import { FetchedProduct } from '../pages/Catalog/CatalogMainContent/CatalogMainContent';
import { useAppSelector } from './hooks';
import { store } from './store';

export type CartItem = FetchedProduct & {
    productType: string;
    quantity: number;
};

export type CartItemPayload = Omit<CartItem, 'quantity'>;

export type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart-slice',
    initialState,
    reducers: {
        addToCart(state: CartState, action: PayloadAction<CartItemPayload>) {
            const cartItem = action.payload;

            const itemIndex = state.items.findIndex(
                (item: CartItem) => item.id === cartItem.id,
            );
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart(state: CartState, action: { payload: number }) {
            const itemIndex = state.items.findIndex(
                (item: CartItem) => item.id === action.payload,
            );

            if (state.items[itemIndex].quantity === 1) {
                state.items.splice(itemIndex, 1);
            } else {
                state.items[itemIndex].quantity--;
            }
        },
        replaceCart(state, action) {
            state.items = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(updCart.fulfilled, (state, action) => {});
    // },
});

export type UpdateCartInputs = {
    cartItem: CartItemPayload;
    userId: number;
    isAuth: boolean;
};

// export const updCart = createAsyncThunk('cart-slice/updateCart', async function () {
//     await updateCart();
// });

// export const updateDatabaseCart = createAsyncThunk(
//     'cart-slice',
//     ({ cartItem, userId, isAuth, isIncrease }: UpdateCartInputs) => {},
// );

export const updateDatabaseCart = ({ cartItem, userId, isAuth }: UpdateCartInputs) => {
    const updatedCart = store.getState().cart.items || [];
    const cartData = updatedCart.map((product: CartItem) => ({
        userId,
        productId: product.id,
        productType: product.productType,
        quantity: product.quantity,
    }));

    if (isAuth) {
        if (updatedCart.length) {
            updateCart(cartData);
        } else {
            updateCart([{ userId, productId: cartItem.id }]);
        }
    } else {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
};

export const cartActions = cartSlice.actions;
