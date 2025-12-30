import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice";
import productsReducer from "./products.slice";
import usersReducer from "./users.slice";
import cartsReducer from "./carts.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    users: usersReducer,
    carts: cartsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
