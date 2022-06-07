import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    showSidebar: false
}

export const sideBarSlice = createSlice({
    name: "sideBarToggle",
    initialState,
    reducers: {
        toggleFunc: (state) => {
            state.showSidebar = !state.showSidebar;
        }
    }
})

export const { toggleFunc} = sideBarSlice.actions;

export default sideBarSlice.reducer;