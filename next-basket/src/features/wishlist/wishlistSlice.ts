import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  products: [];
}

const initialState: WishlistState = {
  products: [],
};
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state: any, action: PayloadAction<WishlistState>) => {
      const product = action.payload;
      console.log("product", product);
      state.products.push(product);
    },
    removeToWishlist: (state: any, action: PayloadAction<WishlistState>) => {
      const product = action.payload;
      state.products = state.products.filter(
        (item: any) => item.id !== product
      );
    },
    emptyWishlist: (state) => {
      state.products = [];
      console.log(state);
    },
  },
});

export const { addToWishlist, removeToWishlist, emptyWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
