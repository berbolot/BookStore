import axios from "axios";

const endpoind = axios.create({
  baseURL: process.env.REACT_APP_API,
});

const getBooks = () => endpoind.get("/books");
const postBooks = (payload) => endpoind.post("/books", payload);
const getCartItems = () => endpoind.get("/cartItems");
const postCartItems = (payload) => endpoind.post("/cartItems", payload);

const api = {
  getBooks,
  postBooks,
  getCartItems,
  postCartItems,
};

export default api;
