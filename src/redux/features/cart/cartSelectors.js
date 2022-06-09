import { createSelector} from "@reduxjs/toolkit";

const cartSelector = (state) => state.cart;

// Function to calculate the total length in the cart
export const cartTotalSelector = createSelector([cartSelector], (cart) => {
    return cart.reduce((total, current) => (total += current.roomsBooked), 0);
})

// Function to calculate total Price
export const cartTotalPriceSelector = createSelector([cartSelector], (cart) => {
    return cart.reduce((total, current) => (total += current.roomsBooked * current.price), 0);
})