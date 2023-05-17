import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./Blog/blogSlice";

export const store = configureStore(
  {
    reducer: {
      blog: blogReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
