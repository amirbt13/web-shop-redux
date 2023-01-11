import React from "react";

// components
import Product from "./Product";
import Filters from "./Filters";

// redux
import { useSelector } from "react-redux";

const Products = () => {
  const productsState = useSelector((state) => state.products);
  // const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className="flex flex-col-reverse sm:flex-row">
      <div
        className={`basis-3/4 md:basis-4/5 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5 my-6 mx-2 `}
      >
        {productsState.loading ? (
          <h2>Loading ...</h2>
        ) : productsState.error ? (
          <p>{productsState.error}</p>
        ) : (
          productsState.products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        )}
      </div>
      <Filters products={productsState.products} />
    </div>
  );
};

export default Products;
