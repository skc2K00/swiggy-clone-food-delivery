import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state,action) => {
            state.push(action.payload)
        },
        clearCart: (state,action) => {
            state.length=0;
        }
    }
})

export const {addToCart,clearCart} = cartSlice.actions

export default cartSlice.reducer