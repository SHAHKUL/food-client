import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  order: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = state.products.find(
        (pro) => pro._id === action.payload._id
      );
      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (pro) => pro._id !== action.payload._id
      );
    },
    emptyProduct: (state) => {
      state.products = [];
    },
    orderProduct: (state,action) => {
      state.order = action.payload;
    },
  },
});

export const { addProduct, removeProduct, emptyProduct,orderProduct } = cartSlice.actions;

export default cartSlice.reducer;
