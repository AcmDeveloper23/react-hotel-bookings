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
                const results = state.bookmarkLists.filter((item) => item.id !== id) || [];
                return {
                    ...state,
                    bookmarkLists: results
                }
            } else {
                state.bookmarkLists.push({
                    ...payload,
                    isBookmarked: true
                })
            }
        },
        checkBookmark: (state, {payload}) => {
            const { id } = payload;
            const isAvailable = state.bookmarkLists.find((item) => item.id === id);

            if(isAvailable) {
                return true;
            } 
            return false;
        }
    }
})

export const { addRemoveBookmarks } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;