import { configureStore } from "@reduxjs/toolkit";
import productReducer, { saveState } from "../redux/slice";
import authReducer from "../redux/auth";

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  saveState("cart", state.product.cart);
});

export default store;
