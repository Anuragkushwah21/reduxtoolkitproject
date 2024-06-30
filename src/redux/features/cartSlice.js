import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

//cart Slice

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    //add to cart
    addToCart: (state, action) => {
      const IteamIndex = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );
      if (IteamIndex >= 0) {
        state.carts[IteamIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, temp]; //(...)sprede opratior se priviows value bhi rhti h or new value bhi add kr slte h
      }
      // console.log("action",action)
    },

    //remove cart data
    removeToCart: (state, action) => {
      const data = state.carts.filter((ele) => ele.id !== action.payload);
      state.carts = data;
    },

    // remove single iteams
    removeSingleIteams: (state, action) => {
      const IteamIndex_dec = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (state.carts[IteamIndex_dec].qnty >= 1) {
        state.carts[IteamIndex_dec].qnty -= 1;
      }
    },
    // clear cart
    emptycartIteam: (state, action) => {
      state.carts = [];
    },
  },
});
export const { addToCart, removeToCart, removeSingleIteams, emptycartIteam } =
  cartSlice.actions;

export default cartSlice.reducer;
