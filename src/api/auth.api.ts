import axios from "./axios";
export const login = (data: {
  username: string;
  password: string;
}) => axios.post("/auth/login", data);
