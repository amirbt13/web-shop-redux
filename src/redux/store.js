import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import productsReducer from "./products/productsSlice";
import filterReducer from "./filters/filterSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    filter: filterReducer,
  },
});

export default store;
