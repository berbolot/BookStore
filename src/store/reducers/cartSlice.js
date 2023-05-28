import { createSlice } from "@reduxjs/toolkit";
import fetchAllCart from "../actions/cartCreator";

const initialState = {
  isOpen: false,
  totalPrice: 0,
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
    addItem(state, action) {
      console.log(action.payload);
      if (state.items.find((obj) => obj.id === action.payload.id)) {
        const { id, price } = action.payload;
        state.items = state.items.map((obj) => {
          if (id === obj.id) {
            obj.count += 1;
            obj.total += price;
          }
          return obj;
        });
      } else {
        state.items = [...state.items, action.payload];
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    minusItem(state, action) {
      const { id, price } = action.payload;
      state.items = state.items.map((obj) => {
        if (obj.count < 1) {
        } else if (id === obj.id) {
          obj.count -= 1;
          obj.total -= price;
        }
        return obj;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCart.pending, (state, action) => {
      state.itemsIsLoading = true;
      state.itemsIsError = "";
      state.items = null;
    });

    builder.addCase(fetchAllCart.fulfilled, (state, action) => {
      state.itemsIsLoading = false;
      state.itemsIsError = "";
      state.items = action.payload;
    });

    builder.addCase(fetchAllCart.rejected, (state, action) => {
      state.itemsIsLoading = true;
      state.itemsIsError = action.payload;
      state.items = null;
    });
  },
});

const cartReducer = cartSlice.reducer;

export const { setisOpen, addItem, removeItem, minusItem } = cartSlice.actions;
export default cartReducer;
