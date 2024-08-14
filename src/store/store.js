import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "../slices/ui-slice";
import cartSlice from "../slices/cartSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer
  },
});

export default store;
