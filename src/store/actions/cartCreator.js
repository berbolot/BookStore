import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import { setCartItems } from "../reducers/cartSlice";

const fetchAllCart = createAsyncThunk(
  "cart/fetchAll",
  async (payload, thankApi) => {
    try {
      const response = await api.getCartItems();
      return response.data;
    } catch (err) {
      return thankApi.rejectWithValue("Что то прошло не так");
    }
  }
);

const updateOrder = async (payload, thankApi, quantity, del) => {
  const { books } = thankApi.getState().booksReducer;
  const { items } = thankApi.getState().cartReducer;
  const book = books.find((el) => el.id === payload);
  const itemIdx = items.findIndex((el) => el.id === payload);
  const item = items[itemIdx];
  const newItem = createItem(book, item, quantity);
  const newItems = await updateItem(items, newItem, itemIdx, del);

  return newItems;
};

const updateItem = async (items, item, idx, del) => {
  if (del) {
    await api.deleteItem(del);
    const newItems = items.filter(({ id }) => id !== item.id);
    return newItems;
  }

  if (item.count === 0) {
    await api.deleteItem(item.id);
    const newItems = items.filter(({ id }) => id !== item.id);
    return newItems;
  }

  if (idx > -1) {
    await api.putCartItems(item);
    const before = items.slice(0, idx);
    const after = items.slice(idx + 1);
    const newItems = [...before, item, ...after];
    return newItems;
  }

  await api.postCartItems(item);
  const newItems = [...items, item];
  return newItems;
};

const createItem = (book, item = {}, quantity) => {
  const { count = 0, total = 0 } = item;

  return {
    id: book.id,
    title: book.title,
    count: count + quantity,
    total: total + book.price * quantity,
  };
};

export const addToCart = createAsyncThunk(
  "cart/add",
  async (payload, thankApi) => {
    try {
      const newItems = await updateOrder(payload, thankApi, 1, false);
      return thankApi.dispatch(setCartItems(newItems));
    } catch (err) {
      return thankApi.rejectWithValue("не получилось изменить корзину");
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/remove",
  async (payload, thankApi) => {
    try {
      const newItems = await updateOrder(payload, thankApi, -1, false);
      return thankApi.dispatch(setCartItems(newItems));
    } catch (err) {
      return thankApi.rejectWithValue("не получилось изменить корзину");
    }
  }
);

export const deleteFromCart = createAsyncThunk(
  "cart/delete",
  async (payload, thankApi) => {
    try {
      const newItems = await updateOrder(payload, thankApi, -1, payload);

      return thankApi.dispatch(
        setCartItems(newItems.filter((item) => item.id !== payload))
      );
    } catch (err) {
      return thankApi.rejectWithValue("не получилось изменить корзину");
    }
  }
);

export default fetchAllCart;
