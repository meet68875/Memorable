import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Banner from './component/Banner';
import BlogSection from './component/blog';
import Footer from './component/Footer';
import Hotels from './component/Hotels';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        {/* <Banner />  */}
        
        {/* Set up routes for different pages */}
        <Routes>
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/blogs" element={<BlogSection />} />
          {/* You can add more routes as needed */}
          <Route path="/" element={<BlogSection />} /> {/* Default route */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
