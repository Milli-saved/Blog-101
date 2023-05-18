import { useEffect } from "react";
import { getAllBlogs } from "../features/Blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";

import Blogs from "../components/Blogs";
import Header from "../components/Header";
import homeHeaderBackground from "../../src/assets/img/home-bg.jpg";
import Loader from "../components/Loader/Loader";

const HomePage = () => {
  const dispatch = useDispatch();

  const { blogs, blog, isLoading, isError, isSuccess } = useSelector(
    (state) => state.blog
  );

  useEffect(() => {
    dispatch(getAllBlogs());
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
          {isLoading && <Loader />}
          <Blogs blogs={blogs} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
