import axios from "./axios";
export const getProducts = () => axios.get("/products");
export const getProduct = (id: number) => axios.get(`/products/${id}`);
export const addProduct = (data: any) => axios.post("/products", data);
export const updateProduct = (id: number, data: any) =>
  axios.put(`/products/${id}`, data);
export const deleteProduct = (id: number) =>
  axios.delete(`/products/${id}`);
