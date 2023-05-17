import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import SingleBlogPage from './Pages/SingleBlogPage';

function App() {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/blog/:blogId' element={<SingleBlogPage />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
}

export default App;
