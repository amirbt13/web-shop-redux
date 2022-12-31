import React, { useEffect } from "react";

// router
import { Route, Routes } from "react-router-dom";

// Components
import Products from "./Products";
import ProductDetails from "./ProductDetails";

// redux
import { fetchProducts } from "../redux/products/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";

const Store = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products);

  // get products when render
  useEffect(() => {
    if (!productsState.products.length) dispatch(fetchProducts());
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Helmet>
        <title>Store</title>
      </Helmet>
      <Routes>
        <Route index element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default Store;
