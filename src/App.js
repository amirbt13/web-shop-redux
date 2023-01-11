import React, { useEffect } from "react";

// router
import { Route, Routes } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";

// Components
import Store from "./components/Store";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Cart from "./components/Cart";
import ContactUs from "./components/ContactUs";
// Actions
import { toggleMode } from "./redux/darkMode/darkModeSlice";

function App() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();
  useEffect(() => {
    const isSystemDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isSystemDark) dispatch(toggleMode());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <div
        className={`${
          darkMode ? "bg-gray-800 min-h-[100vh]" : "bg-white min-h-[100vh]"
        }`}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/store/*" element={<Store />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
