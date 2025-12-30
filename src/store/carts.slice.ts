import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCarts } from "../api/carts.api";

interface CartsState {
  list: any[];
  loading: boolean;
  error: string | null;
}

const initialState: CartsState = {
  list: [],
  loading: false,
  error: null,
};

export const fetchCarts = createAsyncThunk(
  "carts/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getCarts();
      return res.data;
    } catch (err) {
      return rejectWithValue("Failed to load carts");
    }
  }
);

const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCarts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchCarts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default cartsSlice.reducer;
