import axios from "axios";

const API_URL = "http://localhost:3005";

const getAllBlogs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getOneBlog = async (blogId) => {
  const response = await axios.get(API_URL + blogId);
  return response.data;
};

const BlogServices = {
  getAllBlogs,
  getOneBlog,
};

export default BlogServices;
