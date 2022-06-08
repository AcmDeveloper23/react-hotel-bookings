import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import sideBarReducer from "./features/sideBar/sideBarSlice";
import bookmarkReducer from "./features/bookmark/bookmarkSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        sideBarToggle: sideBarReducer,
        bookmar: bookmarkReducer
    }
});