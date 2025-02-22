import React from 'react'
import Blog from './Blog';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import ErrPage from './ErrPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import Home from './Home';

function MainLayout() {
    return (
        <BrowserRouter>
            <MainHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/service" element={<Service />} />
                <Route path="*" element={<ErrPage />} />
            </Routes>
            <MainFooter />
        </BrowserRouter>
    )
}

export default MainLayout