import axios from "./axios";

// Login user
export const login = (data: {
  username: string;
  password: string;
}) => axios.post("/auth/login", data);
