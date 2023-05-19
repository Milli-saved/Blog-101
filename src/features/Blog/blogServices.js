import axios from "axios";

const API_URL = "https://server-for-blog-app.onrender.com/";

const getAllBlogs = async () => {
  const response = await axios.get(API_URL + "all");
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
