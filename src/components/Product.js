import React from "react";

// redux
import { useSelector } from "react-redux";

// router
import { Link } from "react-router-dom";

// Components
import CartButtons from "../smallComponents/CartButtons";

const Product = ({ product }) => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div
      className={`container flex-col  items-center w-[10rem] xs:w-[12rem] mx-auto border-[1px] border-solid  rounded-md shadow-lg justify-between  ${
        darkMode
          ? "bg-slate-600 border-slate-700"
          : " bg-slate-50 border-silver"
      } ${product.isShow ? "flex" : "hidden"}`}
      onMouseDown={(e) => e.target.classList.add("shadow-inner")}
      onMouseUp={(e) => e.target.classList.remove("shadow-inner")}
    >
      <Link to={`/store/products/${product.id}`}>
        <h4
          className={`${
            darkMode ? "text-white" : "text-black"
          } "text-center my-4 px-2"`}
        >
          {product.title.length > 15
            ? `${product.title.substr(0, 15)}...`
            : product.title}
        </h4>

        <div className="w-[8rem] min-h-[8rem] mb-2 mx-auto">
          <img
            className=" h-[9rem] rounded-md mx-auto"
            src={product.image}
            alt="product pic"
          />
        </div>
      </Link>

      <div className="flex flex-col items-center">
        <span
          className={`mb-2 font-light text-sm rounded-sm px-1 ${
            darkMode ? "bg-slate-800 text-white" : "bg-lime-200"
          }`}
        >
          ${product.price}
        </span>

        <CartButtons product={product} />
      </div>
    </div>
  );
};

export default Product;
