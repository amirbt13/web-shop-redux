import React from "react";

import { isInCart, quantityCount } from "../helperF/functions";

import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  increase,
  decrease,
} from "../redux/cart/cartSlice";

const CartButtons = ({ product }) => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="mb-2">
      {!isInCart(state, product.id) ? (
        <button
          className="bg-slate-100 py-[1px] px-1 rounded-md"
          onClick={() => dispatch(addItem(product))}
        >
          ADD TO CART
        </button>
      ) : (
        <button
          className=" bg-blue-700 text-white px-[9px] rounded-sm py-[1px]"
          onClick={() => dispatch(increase(product))}
        >
          +
        </button>
      )}
      {quantityCount(state, product.id) >= 1 && (
        <span className="py-1 px-[6px]  rounded-sm mx-[2px]">
          {quantityCount(state, product.id)}
        </span>
      )}
      {quantityCount(state, product.id) === 1 && (
        <button
          className="bg-slate-100 py-[1px] px-1 rounded-md"
          onClick={() => dispatch(removeItem(product))}
        >
          REMOVE
        </button>
      )}
      {quantityCount(state, product.id) > 1 && (
        <button
          className=" bg-red-500 text-white px-[10px] rounded-sm py-[1px]"
          onClick={() => dispatch(decrease(product))}
        >
          -
        </button>
      )}
    </div>
  );
};

export default CartButtons;
