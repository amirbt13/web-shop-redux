import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
  isChekedOut: false,
  itemsCount: 0,
  totalPrice: 0,
};

const sumItem = (items) => {
  const itemsCount = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  return itemsCount;
};
const sumPrice = (items) => {
  const totalPrice = items
    .reduce((total, product) => total + product.quantity * product.price, 0)
    .toFixed(2);
  return totalPrice;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log("ADD_ITEM");
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });

        state.itemsCount = sumItem(state.selectedItems);
        state.totalPrice = sumPrice(state.selectedItems);
        state.isChekedOut = false;
      }
    },
    removeItem: (state, action) => {
      console.log("REMOVE_ITEM");
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      state.itemsCount = sumItem(state.selectedItems);
      state.totalPrice = sumPrice(state.selectedItems);
    },
    increase: (state, action) => {
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      state.itemsCount = sumItem(state.selectedItems);
      state.totalPrice = sumPrice(state.selectedItems);
    },
    decrease: (state, action) => {
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      state.itemsCount = sumItem(state.selectedItems);
      state.totalPrice = sumPrice(state.selectedItems);
    },
    checkout: (state) => {
      state.isChekedOut = true;
      state.selectedItems = [];
    },
    clear: () => {
      return initialState;
    },
  },
});

export const { addItem, removeItem, increase, decrease, clear, checkout } =
  cartSlice.actions;
export default cartSlice.reducer;
