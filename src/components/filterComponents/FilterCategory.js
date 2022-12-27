import React, { useEffect, useState } from "react";

// icons
import arrow from "../../icons/down-arrow.svg";

// redux
import { useSelector, useDispatch } from "react-redux";
import { changeShow, changeValue } from "../../redux/filters/filterAction";
import { changeShowProducts } from "../../redux/products/productsAction";

const FilterCategory = () => {
  const products = useSelector((state) => state.productsState.products);
  const filterState = useSelector((state) => state.filterState);
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = () => {
      const categoryOfEvery = products.map((product) => product.category);
      const categories = [...new Set(categoryOfEvery), "all"];
      return categories;
    };
    setCategories(getCategories());
  }, [products]);

  useEffect(() => {
    dispatch(changeShowProducts("category", filterState.category.value));
    // eslint-disable-next-line
  }, [filterState.category.value]);

  return (
    <section
      className={` bg-white text-gray-800 mb-2 mx-1 rounded-lg py-1 px-2`}
    >
      <div
        className="flex justify-between"
        onClick={() => dispatch(changeShow("category"))}
      >
        <p>Categories </p>
        <img className=" w-4" src={arrow} alt="arrow-down" />
      </div>
      <div
        className={`${
          filterState.category.isShow ? "flex" : "hidden"
        } flex-col`}
      >
        <div className="text-right">
          {categories.map((category) => (
            <div key={category}>
              <label className="mr-2">{category}</label>
              <input
                onClick={(event) => dispatch(changeValue(event.target))}
                type="radio"
                name="category"
                value={category}
                defaultChecked={category === "all" ? true : false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterCategory;
