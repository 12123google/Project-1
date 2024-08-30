import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './Head/Head';
import Home from './Home/Home';
import About from './About/About';
import Activity from './Activity/Activity';
import Gallery from './Gallery/Gallery';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact'; 
import Footer from './Footer/Footer';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <>
          <Head />
      <main style={{ minHeight: 'calc(100vh - 200px)' }}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activity />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} /> 
        </Routes>
      </main>
      <Footer />
      </>
  );
}

export default App;
