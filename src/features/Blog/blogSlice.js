import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {},
});

export const { reset } = blogSlice.actions;
export default blogSlice.reducer;
