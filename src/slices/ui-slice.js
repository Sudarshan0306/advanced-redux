import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {isCartVisible : true},
    reducers: {
        toggle(state) {
            state.isCartVisible = !state.isCartVisible
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;