import { createSlice } from "@reduxjs/toolkit";
import fetchAllCart from "../actions/cartCreator";
const initialState = {
  isOpen: false,
  items: [],
  itemsIsError: "",
  itemsIsLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setisOpen: (state, action) => {
      state.isOpen = action.payload;
    },

    setCartItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCart.pending, (state, action) => {
      state.itemsIsLoading = true;
      state.itemsIsError = "";
      state.items = [];
    });

    builder.addCase(fetchAllCart.fulfilled, (state, action) => {
      state.itemsIsLoading = false;
      state.itemsIsError = "";
      state.items = action.payload;
    });

    builder.addCase(fetchAllCart.rejected, (state, action) => {
      state.itemsIsLoading = true;
      state.itemsIsError = action.payload;
      state.items = [];
    });
  },
});

const cartReducer = cartSlice.reducer;

export const { setisOpen, setCartItems } = cartSlice.actions;
export default cartReducer;
