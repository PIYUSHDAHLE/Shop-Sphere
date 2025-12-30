import axios from "./axios";

// Get all users
export const getUsers = () => axios.get("/users");

// Get single user
export const getUser = (id: number) => axios.get(`/users/${id}`);

// Add new user
export const addUser = (data: any) => axios.post("/users", data);

// Update user
export const updateUser = (id: number, data: any) =>
  axios.put(`/users/${id}`, data);

// Delete user
export const deleteUser = (id: number) =>
  axios.delete(`/users/${id}`);
