import { useEffect } from "react";
import { getAllBlogs } from "../features/Blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";

import Blogs from "../components/Blogs";
import Header from "../components/Header";
import homeHeaderBackground from "../../src/assets/img/home-bg.jpg";
import Loader from "../components/Loader/Loader";

const HomePage = () => {
  const dispatch = useDispatch();

  const { blogs, isLoading, isError, message } = useSelector(
    (state) => state.blog
  );

  useEffect(() => {
    dispatch(getAllBlogs());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header
        header="Clean Blog"
        subHeading="A Blog Theme by Bootstrap"
        backgroundImage={homeHeaderBackground}
      />
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          {isLoading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Loader />
            </div>
          )}
          {isError && (
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                color: "red",
                fontStyle: "italic",
              }}
            >
              {" "}
              {message}
            </p>
          )}

          <Blogs blogs={blogs} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
