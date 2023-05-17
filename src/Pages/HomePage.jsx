import Blogs from '../components/Blogs';
import Header from '../components/Header';
import homeHeaderBackground from '../../src/assets/img/home-bg.jpg';
const HomePage = () => {
    return (
        <>
            <Header
                header='Clean Blog'
                subHeading='A Blog Theme by Bootstrap'
                backgroundImage={homeHeaderBackground}
            />
            <div className='container px-4 px-lg-5'>
                <div className='row gx-4 gx-lg-5 justify-content-center'>
                    <Blogs />
                </div>
            </div>
        </>
    );
};

export default HomePage;
