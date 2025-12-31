import axios from "./axios";
export const getUsers = () => axios.get("/users");
export const getUser = (id: number) => axios.get(`/users/${id}`);
export const addUser = (data: any) => axios.post("/users", data);
export const updateUser = (id: number, data: any) =>
  axios.put(`/users/${id}`, data);
export const deleteUser = (id: number) =>
  axios.delete(`/users/${id}`);
