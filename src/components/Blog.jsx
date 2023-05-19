import { Link } from "react-router-dom";
import musika from "../assets/music/hannaTrackOne.mp3";
const Blog = ({ blog }) => {
  return (
    <>
      <div className="post-preview">
        <Link to="blog/1">
          <h2 className="post-title">{blog.postTitle}</h2>
          <h3 className="post-subtitle">{blog.postSubtitle}</h3>
        </Link>
        <audio controls src={musika} />
        <p className="post-meta">
          Posted by <a href="#!">{blog.postedBy}</a> {blog.postDate}
        </p>
      </div>
      <hr className="my-4" />
    </>
  );
};

export default Blog;
