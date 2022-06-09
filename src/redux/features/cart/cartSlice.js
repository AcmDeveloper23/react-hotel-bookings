import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const { id } = payload;

            const itemFound = state.find((item) => item.id === id);

            // If item found, then update the quantity(roomsBooked) else push
            if(itemFound) {
                return state.map((item) => (
                    item.id === id ? {
                        ...item,
                        roomsBooked: item.roomsBooked + 1
                    } : item
                ))
            } else {
                state.push({
                    ...payload,
                    roomsBooked: 1
                });
            }
        },
        removeFromCart: (state, {payload}) => {
            return state = state.filter((item) => item.id !== payload)
        },
        increment: (state, action) => {
            const { payload } = action;

            return state.map((item) => (
                item.id === payload ? {
                    ...item,
                    roomsBooked: item.roomsBooked + 1
                } : item
            ))
        },
        decrement: (state, { payload }) => {
            return state.map((item) => (
                item.id === payload ? {
                    ...item,
                    roomsBooked: item.roomsBooked - 1
                } : item
            ))
        },
        clear: (state) => {
            return [];
        }
    }
})

export const { addToCart, removeFromCart, increment, decrement, clear } = cartSlice.actions;

export default cartSlice.reducer;