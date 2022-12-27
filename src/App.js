import React from "react";

// router
import { Route, Routes } from "react-router-dom";
// redux
import store from "./redux/store";
import { Provider } from "react-redux";

// Components
import Store from "./components/Store";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Cart from "./components/Cart";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/store/*" element={<Store />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Provider>
  );
}

export default App;
