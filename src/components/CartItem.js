import React from "react";
// Redux
import { useSelector } from "react-redux";

// components
import CartButtons from "../smallComponents/CartButtons";

const CartItem = ({ product }) => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const totalPrice = product.price * product.quantity;
  return (
    <div
      className={`my-2 sm:w-3/4 rounded-md flex  items-center h-40 mx-auto shadow-md border-t-2 ${
        darkMode ? "bg-slate-500 text-white border-slate-800" : "bg-white"
      }`}
    >
      <div className="my-2">
        <img
          className=" w-16 xs:w-20 ml-2 mr-4 rounded-md"
          src={product.image}
          alt="product"
        />
      </div>
      <div className="flex md:justify-evenly xs:justify-around justify-end w-full xl:w-3/4  mx-1">
        <h4 className="mb-2 hidden lg:block">
          {product.title.length > 20
            ? `${product.title.substr(0, 17)}...`
            : product.title}
        </h4>

        <span
          className={`mb-2 font-light text-sm rounded-sm px-2 ${
            darkMode ? "bg-slate-800 text-white" : "bg-lime-200"
          }`}
        >
          <span className="hidden">Price: </span>${product.price}
        </span>
        <span className="mx-2 xs:mx-0"> X </span>
        <CartButtons product={product} />
        <span>= ${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartItem;
