import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: {
    isShow: false,
    value: "",
  },
  category: {
    isShow: false,
    value: "all",
  },
  price: {
    isShow: false,
    value: 0,
  },
  main: {
    isShow: false,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilterShow: (state, action) => {
      console.log(action.payload);
      Object.keys(state).forEach((key) => {
        if (key === action.payload) {
          state[key].isShow = !state[key].isShow;
        } else if (key !== "main" && key !== action.payload) {
          state[key].isShow = false;
        }
      });
    },
    changeFilterValue: (state, action) => {
      console.log(action.payload);
      state[action.payload.name].value = action.payload.value;
    },
  },
});
export const { changeFilterShow, changeFilterValue } = filterSlice.actions;
export default filterSlice.reducer;
