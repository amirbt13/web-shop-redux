import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data;

    return data;
  }
);

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeShowProducts: (state, action) => {
      if (action.payload.name === "search") {
        if (action.payload.value !== "") {
          const newProducts = state.products.map((product) => {
            if (product.title.toLowerCase().includes(action.payload.value)) {
              return {
                ...product,
                isShow: true,
              };
            } else {
              return {
                ...product,
                isShow: false,
              };
            }
          });
          state.products = newProducts;
        } else {
          const newProducts = state.products.map((product) => {
            return {
              ...product,
              isShow: true,
            };
          });
          state.products = newProducts;
        }
      }
      // category filter
      // category filter
      if (action.payload.name === "category") {
        const newProducts = state.products.map((product) => {
          if (action.payload.value === "all") {
            return {
              ...product,
              isShow: true,
            };
          } else if (product.category !== action.payload.value) {
            return {
              ...product,
              isShow: false,
            };
          } else {
            return {
              ...product,
              isShow: true,
            };
          }
        });
        state.products = newProducts;
      }
      // price filter
      // price filter
      if (action.payload.name === "price") {
        const newProducts = state.products.map((product) => {
          if (product.price > action.payload.value) {
            return {
              ...product,
              isShow: false,
            };
          } else {
            return {
              ...product,
              isShow: true,
            };
          }
        });
        state.products = newProducts;
      }
    },
    showAllProducts: (state) => {
      const newProducts = state.products.map((product) => {
        return {
          ...product,
          isShow: true,
        };
      });

      state.products = newProducts;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.map((product) => {
        return { ...product, isShow: true };
      });
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export const { changeShowProducts, showAllProducts } = productsSlice.actions;
export default productsSlice.reducer;
