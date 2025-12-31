import axios from "./axios";
export const getCarts = () => axios.get("/carts");
export const getCart = (id: number) => axios.get(`/carts/${id}`);
export const addCart = (data: any) => axios.post("/carts", data);
export const updateCart = (id: number, data: any) =>
  axios.put(`/carts/${id}`, data);
export const deleteCart = (id: number) =>
  axios.delete(`/carts/${id}`);
