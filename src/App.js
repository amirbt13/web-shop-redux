import React from "react"; 
import { Route, Routes } from "react-router-dom";

// Context Provider
import ProductsContextProvider from "./contexts/ProductsContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

// Components
import Store from "./components/Store";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Cart from "./components/Cart";
import ContactUs from "./components/ContactUs";


function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
          <Header />
          <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/store/*" element={<Store />} />
          <Route path="/contact" element={<ContactUs />} />
          </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
