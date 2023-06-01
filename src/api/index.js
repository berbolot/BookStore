import axios from "axios";

const endpoind = axios.create({
  baseURL: process.env.REACT_APP_API,
});

const getBooks = () => endpoind.get("/books");
const postBooks = (payload) => endpoind.post("/books", payload);
const getCartItems = () => endpoind.get("/cartItems");
const postCartItems = (payload) => endpoind.post("/cartItems", payload);
const deleteItem = (payload) => endpoind.delete(`/cartItems/${payload}` );


const putCartItems = (payload) => endpoind.put(`/cartItems/${payload.id}`, payload);

const api = {
  getBooks,
  postBooks,
  getCartItems,
  postCartItems,
  deleteItem,
  putCartItems,
};

export default api;
