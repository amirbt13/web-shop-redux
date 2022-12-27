import React, { useEffect } from "react";

// icons
import arrow from "../../icons/down-arrow.svg";

// redux
import { changeShow, changeValue } from "../../redux/filters/filterAction";
import { changeShowProducts } from "../../redux/products/productsAction";
import { useSelector, useDispatch } from "react-redux";

const FilterSearch = () => {
  const filterState = useSelector((state) => state.filterState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeShowProducts("search", filterState.search.value));
    // eslint-disable-next-line
  }, [filterState.search.value]);

  return (
    <div className="bg-white mb-2 mx-1 py-1 px-2 rounded-lg text-gray-800">
      <div
        className="flex justify-between"
        onClick={() => dispatch(changeShow("search"))}
      >
        <p>Search</p>
        <img className="w-4" src={arrow} alt="arrow-down" />
      </div>
      <div className={`${filterState.search.isShow ? "block" : "hidden"} mt-1`}>
        <input
          name="search"
          value={filterState.search.value}
          className="w-full px-2 py-1 my-1 bg-slate-300 rounded-lg"
          type="text"
          onChange={(event) => dispatch(changeValue(event.target))}
        />
      </div>
    </div>
  );
};

export default FilterSearch;
