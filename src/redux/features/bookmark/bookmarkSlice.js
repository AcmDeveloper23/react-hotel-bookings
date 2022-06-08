import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
    }
})

export const { increment } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;