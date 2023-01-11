import React, { useState } from "react";

// router
import { Link, useLocation } from "react-router-dom";

// icons
import logo from "../icons/png-logo-web.png";
import burgerMenu from "../icons/ham-menu.svg";
import cross from "../icons/cross.svg";

// react-switch
import Switch from "react-switch";

// redux
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "../redux/darkMode/darkModeSlice";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);

  const state = useSelector((state) => state.cart);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  const [isBurgerShow, setIsBurgerShow] = useState(false);

  return (
    <div
      className={`${
        location.pathname === "/"
          ? darkMode
            ? "bg-gradient-to-r from-cyan-800 to-indigo-900 text-slate-300"
            : "bg-gradient-to-r from-cyan-500 to-indigo-700"
          : location.pathname === "/cart"
          ? darkMode
            ? "bg-slate-900 text-white"
            : "bg-slate-100 backdrop-blur"
          : darkMode
          ? "bg-slate-900 text-white"
          : "bg-[#f8fafc7c] backdrop-blur"
      }  items-center  w-full flex justify-between sticky top-0 `}
      style={{ padding: "0 16px" }}
    >
      <div className="flex justify-between items-center">
        <img className="w-12 rounded-full " src={logo} alt="logo" />
        <div className={`flex items-center`}>
          <small className={`ml-2 mr-1 ${darkMode && "opacity-0"}`}>
            Light
          </small>
          <Switch
            onColor="#86d3ff"
            onHandleColor={`${
              location.pathname === "/" ? "#4cf5e7" : "#2693e6"
            }`}
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            checked={darkMode}
            onChange={() => dispatch(toggleMode())}
          />
          <small className={`ml-2 ${!darkMode && " opacity-0"}`}>Dark</small>
        </div>
      </div>
      <div className="hidden sm:block text-2xl">
        <ul className="flex flex-row space-x-6">
          <li className="hover:tracking-widest transition-all font-light">
            <Link to="/cart">
              <span
                className={`px-[4px] relative bottom-3 ${
                  location.pathname === "/"
                    ? "bg-white text-black border-black border-[1px]"
                    : "bg-gradient-to-r from-cyan-500 to-indigo-700 text-white"
                } rounded-full text-sm`}
              >
                {state.itemsCount}
              </span>
              CART
            </Link>
          </li>

          <li className="hover:tracking-widest transition-all font-light">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="hover:tracking-widest transition-all font-light">
            <Link to="/store">SHOP</Link>
          </li>
          <li className="hover:tracking-widest transition-all font-light">
            <Link to="/">HOME</Link>
          </li>
        </ul>
      </div>
      <div className="sm:hidden" onClick={() => setIsBurgerShow(true)}>
        <img className="w-8" src={burgerMenu} alt="menu" />
      </div>

      <div
        className={` transition ease-in-out ${
          isBurgerShow ? "translate-y-[25px]" : "-translate-y-[100px]"
        } bg-white absolute right-0 w-screen flex justify-between border-b-2 px-4`}
      >
        <div>
          <img
            onClick={() => setIsBurgerShow(false)}
            className="relative top-2 left-2 w-4"
            src={cross}
            alt="cross"
          />
        </div>

        <div>
          <ul
            onClick={() => setIsBurgerShow(false)}
            className="text-right mr-1"
          >
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/store">SHOP</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li>
              <Link to="/cart">
                <span
                  className={`px-[4px] relative bottom-[2px] right-1 bg-gradient-to-r from-cyan-500 to-indigo-700 text-white rounded-full text-xs`}
                >
                  {state.itemsCount}
                </span>
                CART
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
