import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

const fetchBooks = createAsyncThunk(
  "books/fetchAll",
  async (payload, thunkApi) => {
    try {
      const response = await api.getBooks();
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export default fetchBooks;
