import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import sideBarReducer from "./features/sideBar/sideBarSlice";
import bookmarkReducer from "./features/bookmark/bookmarkSlice";
import hotelReducer from "./features/hotels/hotelSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        sideBarToggle: sideBarReducer,
        bookmar: bookmarkReducer,
        hotels: hotelReducer
    }
});