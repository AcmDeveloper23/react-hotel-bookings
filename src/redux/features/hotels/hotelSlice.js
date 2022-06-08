import { createSlice } from "@reduxjs/toolkit";
import { hotelData } from "../../../data/hotels";

const initialState = {
    isLoading: false,
    hotelList: [],
}

const hotelSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        startFetch: (state) => {
            state.isLoading = true;
        },
        saveData: (state, action) => {
            const { payload } = action;

            state.isLoading = false;
            state.hotelList = payload;
        }
    }
})

export const { startFetch, saveData } = hotelSlice.actions;

// Middlewares
export const fetchHotels =  () => async (dispatch) => {
    dispatch(saveData([]));
    dispatch(startFetch());

    const results = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(hotelData);
        }, 800)
    })

    dispatch(saveData(results));
} 

export default hotelSlice.reducer;