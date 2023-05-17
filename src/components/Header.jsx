import defaultBackground from "../../src/assets/img/home-bg.jpg";
import WaterWave from "react-water-wave";

const Header = (props) => {
  return (
    <WaterWave className="masthead" imageUrl={props.backgroundImage}>
      {() => (
        <>
          <header
          // className="masthead"
          // style={{ backgroundImage: `url(${props.backgroundImage})` }}
          >
            <div className="container position-relative px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                  <div className="site-heading">
                    <h1>{props.header}</h1>
                    <span className="subheading">{props.subHeading}</span>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </>
      )}
    </WaterWave>
  );
};

Header.defaultProps = {
  header: "Default Header",
  subHeading: "This is default subheader of a page",
  backgroundImage: defaultBackground,
};

export default Header;
