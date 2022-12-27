import { combineReducers } from "redux";
import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";
import filterReducer from "./filters/filterReducer";

const rootReducer = combineReducers({
  productsState: productsReducer,
  cartState: cartReducer,
  filterState: filterReducer,
});

export default rootReducer;
