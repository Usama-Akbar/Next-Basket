import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  products: [];
}

const initialState: CartState = {
  products: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action: PayloadAction<CartState>) => {
      const product = action.payload;
      console.log("product", product);
      state.products.push(product);
    },
    removeToCart: (state: any, action: PayloadAction<CartState>) => {
      const product = action.payload;
      state.products = state.products.filter(
        (item: any) => item.id !== product
      );
    },
    emptyCart: (state) => {
      state.products = [];
      console.log(state);
    },
  },
});

export const { addToCart, removeToCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
