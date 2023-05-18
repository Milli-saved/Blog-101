import Blog from "./Blog";

const Blogs = ({ blogs }) => {
  return (
    <div className="col-md-10 col-lg-8 col-xl-7">
      {blogs.length !== 0 &&
        blogs.map((eachBlog) => {
          return <Blog key={eachBlog.id} blog={eachBlog} />;
        })}
      {/* <Blog />
      <Blog />
      <Blog /> */}

      {/* <!-- Pager--> */}
      <div className="d-flex justify-content-end mb-4">
        <a className="btn btn-primary text-uppercase" href="#!">
          Older Posts →
        </a>
      </div>
    </div>
  );
};

export default Blogs;
