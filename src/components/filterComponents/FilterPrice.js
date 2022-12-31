import React, { useEffect } from "react";

// helper functions
import { min, max } from "../../helperF/functions";

// icons
import arrow from "../../icons/down-arrow.svg";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  changeFilterShow,
  changeFilterValue,
} from "../../redux/filters/filterSlice";
import { changeShowProducts } from "../../redux/products/productsSlice";

const FilterPrice = () => {
  const filterState = useSelector((state) => state.filter);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeShowProducts({ name: "price", value: filterState.price.value })
    );
    // eslint-disable-next-line
  }, [filterState.price.value]);

  return (
    <section className="bg-white text-gray-800 mb-2 mx-1 rounded-lg py-1 px-2">
      <div
        className="flex justify-between"
        onClick={() => dispatch(changeFilterShow("price"))}
      >
        <p>
          Price
          <span className={`${filterState.price.isShow ? "inline" : "hidden"}`}>
            {" "}
            : ${filterState.price.value}
          </span>
        </p>
        <img className="w-4" src={arrow} alt="arrow-down" />
      </div>
      <div className={`my-2 ${filterState.price.isShow ? "flex" : "hidden"}`}>
        <label>${min(products)}</label>
        <input
          name="price"
          value={filterState.price.value}
          className="w-full mx-1"
          type="range"
          min={min(products)}
          max={max(products)}
          onChange={(event) =>
            dispatch(
              changeFilterValue({
                name: event.target.name,
                value: event.target.value,
              })
            )
          }
        />
        <label>${max(products)}</label>
      </div>
    </section>
  );
};

export default FilterPrice;
