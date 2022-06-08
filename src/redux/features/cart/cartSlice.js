import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const { id } = payload;

            const itemFound = state.find((item) => item.id === id);

            if(itemFound) {
                return state.map((item) => (
                    item.id === id ? {
                        ...item,
                        rooms: item.rooms + 1
                    } : item
                ))
            } else {
                state.push({
                    ...payload,
                    rooms: 1
                });
            }
        },
        increment: (state, action) => {
            const { payload } = action;

            return state.map((item) => (
                item.id === payload ? {
                    ...item,
                    rooms: item.rooms + 1
                } : item
            ))
        },
        decrement: (state, { payload }) => {
            return state.map((item) => (
                item.id === payload ? {
                    ...item,
                    rooms: item.rooms - 1
                } : item
            ))
        },
        clear: (state) => {
            return [];
        }
    }
})

export const { addToCart, increment, decrement, clear } = cartSlice.actions;

export default cartSlice.reducer;