import React from "react";

// router
import { useParams } from "react-router-dom";

// components
import CartButtons from "../smallComponents/CartButtons";

// redux
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id - 1;

  const products = useSelector((state) => state.products.products);
  const product = products[id];

  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div
      className="flex justify-around
   items-start xs:items-center py-20 mx-5"
    >
      <div className="basis-1/3 xs:basis-1/2">
        <span
          className={`rounded-sm bg-slate-400 text-sm p-1 inline-block mb-4 `}
        >
          {product.category}
        </span>
        <h3
          className={`text-2xl md:text-4xl mb-4 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {product.title}
        </h3>
        <CartButtons product={product} />
        <p className={`${darkMode ? "text-slate-300" : "text-[#363636] "}`}>
          {product.description}
        </p>
      </div>
      <div className="basis-2/3 xs:basis-1/2 flex justify-end">
        <img
          className="w-[200px] sm:w-[300px] lg:w-[400px] rounded-md"
          src={product.image}
          alt="product"
        />
      </div>
    </div>
  );
};

export default ProductDetails;
