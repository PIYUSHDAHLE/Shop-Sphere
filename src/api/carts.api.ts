import axios from "./axios";

// Get all carts
export const getCarts = () => axios.get("/carts");

// Get single cart
export const getCart = (id: number) => axios.get(`/carts/${id}`);

// Add new cart
export const addCart = (data: any) => axios.post("/carts", data);

// Update cart
export const updateCart = (id: number, data: any) =>
  axios.put(`/carts/${id}`, data);

// Delete cart
export const deleteCart = (id: number) =>
  axios.delete(`/carts/${id}`);
