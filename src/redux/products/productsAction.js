import axios from "axios";

const fetchProductsReq = () => {
  return { type: "FETCH_PRODUCTS_REQ" };
};

const fetchProductsSuccess = (products) => {
  return { type: "FETCH_PRODUCTS_SUCCESS", payload: products };
};

const fetchProductsFail = (error) => {
  return { type: "FETCH_PRODUCTS_FAIL", payload: error };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsReq());
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const products = response.data;
      const finalProducts = products.map((product) => {
        return { ...product, isShow: true };
      });
      dispatch(fetchProductsSuccess(finalProducts));
    } catch (error) {
      dispatch(fetchProductsFail(error.message));
    }
  };
};

export const changeShowProducts = (name, value) => {
  return { type: "CHANGE_SHOW_PRODUCTS", name: name, payload: value };
};
export const ShowAllProducts = () => {
  return { type: "SHOW_ALL_PRODUCTS" };
};
