import React from 'react'
import { Route, Routes } from "react-router-dom";

// Components
import Products from './Products'
import ProductDetails from './ProductDetails'




const Store = () => {

    
  return (
    <div>

    <Routes>
    <Route index element={<Products />}/>
    <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>

    </div>    
  )
}

export default Store