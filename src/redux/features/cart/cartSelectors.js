import { createSelector} from "@reduxjs/toolkit";

const cartSelector = (state) => state.cart;

export const cartTotalSelector = createSelector([cartSelector], (cart) => {
    return cart.reduce((total, current) => (total += current.roomsBooked), 0);
})

export const cartTotalPriceSelector = createSelector([cartSelector], (cart) => {
    return cart.reduce((total, current) => (total += current.roomsBooked * current.price), 0);
})