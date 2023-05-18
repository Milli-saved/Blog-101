import { Link } from "react-router-dom";
const Blog = ({ blog }) => {
  return (
    <>
      <div className="post-preview">
        <Link to="blog/1">
          <h2 className="post-title">{blog.postTitle}</h2>
          <h3 className="post-subtitle">{blog.postSubtitle}</h3>
        </Link>
        <p className="post-meta">
          Posted by
          <a href="#!">{blog.postedBy}</a>
          {blog.postDate}
        </p>
      </div>
      <hr className="my-4" />
    </>
  );
};

export default Blog;
