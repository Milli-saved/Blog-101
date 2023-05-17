import axios from "axios";

const API_URL = "http://localhost:4000/blog";

const getAllBlogs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getOneBlog = async (blogId) => {
  const response = await axios.get(API_URL + blogId);
  return response.data;
};

const blogServices = {
  getAllBlogs,
  getOneBlog,
};
