import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookmarkLists: []
};

export const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {
        addRemoveBookmarks:(state, {payload}) => {
            const { id } = payload;
            const isAvailable = state.bookmarkLists.find((item) => item.id === id);

            if(isAvailable) {
                return state.bookmarkLists.filter((item) => item.id !== id);
            } else {
                state.bookmarkLists.push({
                    ...payload,
                    isBookmarked: true
                })
            }
        },
    }
})

export const { addRemoveBookmarks } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;