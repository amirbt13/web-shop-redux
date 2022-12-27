import React, { useEffect } from "react";

// icons
import arrowWhite from "../icons/down-arrow-white.svg";

// components
import FilterSearch from "./filterComponents/FilterSearch";
import FilterCategory from "./filterComponents/FilterCategory";
import FilterPrice from "./filterComponents/FilterPrice";

// redux
import { useDispatch, useSelector } from "react-redux";
import { changeShow } from "../redux/filters/filterAction";
import { ShowAllProducts } from "../redux/products/productsAction";

const Filters = () => {
  const state = useSelector((state) => state.filterState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ShowAllProducts());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="basis-1/4 md:basis-1/5 bg-gradient-to-r from-cyan-500 to-indigo-700 text-white transition-all ease-in duration-200 mt-1 rounded-sm sm:rounded-md sm:mx-2 sm:mt-[24px] sm:h-72">
      <div
        className="text-center py-2 font-semibold flex justify-center"
        onClick={() => dispatch(changeShow("main"))}
      >
        Filters
        <img className="ml-1 mt-1 w-4" src={arrowWhite} alt="arrow-down" />
      </div>

      <form
        className={`${state.main.isShow ? "flex" : "hidden"} sm:flex flex-col`}
      >
        <FilterSearch />
        <FilterCategory />
        <FilterPrice />
      </form>
    </div>
  );
};

export default Filters;
