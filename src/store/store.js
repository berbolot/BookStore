import { configureStore, combineReducers } from "@reduxjs/toolkit";
import booksReducer from "./reducers/booksSlice";

const rootReducer = combineReducers({
  booksReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
