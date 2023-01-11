import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import productsReducer from "./products/productsSlice";
import filterReducer from "./filters/filterSlice";
import darkModeReducer from "./darkMode/darkModeSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    filter: filterReducer,
    darkMode: darkModeReducer,
  },
});

export default store;
