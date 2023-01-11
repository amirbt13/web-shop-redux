import React from "react";
// helper funstions
import { isInCart, quantityCount } from "../helperF/functions";
// redux
import { useSelector, useDispatch } from "react-redux";
// Actions
import {
  addItem,
  removeItem,
  increase,
  decrease,
} from "../redux/cart/cartSlice";

const CartButtons = ({ product }) => {
  const state = useSelector((state) => state.cart);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  return (
    <div className="mb-2">
      {!isInCart(state, product.id) ? (
        <button
          className={`py-[1px] px-1 rounded-md ${
            darkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-black"
          }`}
          onClick={() => dispatch(addItem(product))}
        >
          ADD TO CART
        </button>
      ) : (
        <button
          className={`px-[9px] rounded-sm py-[1px] ${
            darkMode ? "bg-slate-700 text-white" : "bg-blue-700 text-white"
          }`}
          onClick={() => dispatch(increase(product))}
        >
          +
        </button>
      )}
      {quantityCount(state, product.id) >= 1 && (
        <span
          className={`py-1 px-[6px]  rounded-sm mx-[2px] ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {quantityCount(state, product.id)}
        </span>
      )}
      {quantityCount(state, product.id) === 1 && (
        <button
          className={`bg-slate-100 py-[1px] px-1 rounded-md ${
            darkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-black"
          }`}
          onClick={() => dispatch(removeItem(product))}
        >
          REMOVE
        </button>
      )}
      {quantityCount(state, product.id) > 1 && (
        <button
          className={`px-[10px] rounded-sm py-[1px] ${
            darkMode ? " bg-slate-700 text-white" : "bg-red-600 text-white"
          }`}
          onClick={() => dispatch(decrease(product))}
        >
          -
        </button>
      )}
    </div>
  );
};

export default CartButtons;
