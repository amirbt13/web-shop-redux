import React from "react";

// router
import { Link } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { checkout, clear } from "../redux/cart/cartSlice";

// components
import CartItem from "./CartItem";
import { Helmet } from "react-helmet";

const Cart = () => {
  const state = useSelector((state) => state.cart);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  return (
    <div
      className={`flex flex-col-reverse md:flex-row justify-end min-h-[100vh] pt-2 ${
        !darkMode && "bg-slate-100"
      }`}
    >
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <div className="basis-3/4 ">
        {state.selectedItems.length > 0 ? (
          state.selectedItems.map((item) => (
            <CartItem key={item.id} product={item} dispatch={dispatch} />
          ))
        ) : (
          <div
            className={`my-2 w-3/4 rounded-xl flex justify-around flex-col xs:flex-row  items-center h-32 mx-auto shadow-md border-t-2 ${
              darkMode ? "bg-slate-500 text-white border-slate-800" : "bg-white"
            }`}
          >
            <h4>There is no item in your cart</h4>
            {!state.isChekedOut && (
              <button
                className={`text-white rounded-md px-2 ${
                  darkMode
                    ? "bg-slate-800"
                    : "bg-gradient-to-r from-cyan-500 to-indigo-700"
                }`}
              >
                <Link to="/store">SHOP</Link>
              </button>
            )}
          </div>
        )}
      </div>
      <div className="basis-1/4">
        {state.isChekedOut && (
          <div
            className={` w-5/6 mx-auto my-2 p-3 h-64 rounded-md shadow-md flex flex-col justify-evenly border-t-2 ${
              darkMode ? "bg-slate-500 text-white border-slate-800" : "bg-white"
            }`}
          >
            <h4 className="text-lg text-center">Thank You For Your Purchse</h4>
            <button
              className={`px-2  text-white font-medium rounded-lg ${
                darkMode
                  ? "bg-slate-800"
                  : "bg-gradient-to-r from-cyan-500 to-indigo-700"
              }`}
            >
              <Link to="../store">BUY MORE</Link>
            </button>
          </div>
        )}
        {!state.isChekedOut && (
          <div
            className={`flex flex-col justify-evenly bg-white w-5/6 mx-auto my-2 p-3 h-64 rounded-md shadow-md border-t-2 ${
              darkMode
                ? "bg-slate-500 text-slate-100 border-slate-800"
                : "bg-white"
            }`}
          >
            <div>
              <div>
                <h4
                  className={` text-lg font-bold text-blue-700 ml-2 inline-block ${
                    darkMode ? "text-slate-100" : "text-blue-700"
                  }`}
                >
                  Total Count:{" "}
                </h4>
                <span className="text-lg ml-2">{state.itemsCount}</span>
              </div>
              <div>
                <h4
                  className={` text-lg font-bold  ml-2 inline-block ${
                    darkMode ? "text-slate-100" : "text-blue-700"
                  }`}
                >
                  Total Price:{" "}
                </h4>
                <span className="text-lg ml-2">${state.totalPrice}</span>
              </div>
            </div>
            <div className="ml-2 flex justify-between xl:flex-row flex-col-reverse">
              <button
                className={`  py-[1px] px-1 rounded-md ${
                  darkMode ? "bg-slate-600" : "bg-slate-100"
                }`}
                onClick={() => dispatch(clear())}
              >
                CLEAR CART
              </button>
              <button
                className={` text-white px-2 rounded-md shadow-sm mb-2 xl:mb-0 ${
                  darkMode
                    ? "bg-slate-800"
                    : "bg-gradient-to-r from-cyan-500 to-indigo-700"
                }`}
                onClick={() => dispatch(checkout())}
              >
                CHECK OUT
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
