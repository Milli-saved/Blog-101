import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BlogServices from "./blogServices";

const initialState = {
  blogs: [],
  blog: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getAllBlogs = createAsyncThunk(
  "blog/getAllBlogs",
  async (_, thunkAPI) => {
    try {
      return await BlogServices.getAllBlogs();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log("this is the error", message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getOneBlog = createAsyncThunk(
  "blog/getOneBlog",
  async (blogId, thunkAPI) => {
    try {
      return await BlogServices.getOneBlog(blogId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      // getAllBlogs
      .addCase(getAllBlogs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.blogs = [];
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogs = action.payload;
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //getOneBlog
      .addCase(getOneBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blog = action.payload;
      })
      .addCase(getOneBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = blogSlice.actions;
export default blogSlice.reducer;
