import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchBooks = createAsyncThunk(
  "books/fetchAll",
  async (payload, thunkApi) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/books`, {
        signal: thunkApi.signal,
      });
      const data = await response.json();
      console.log(process.env);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export default fetchBooks;
