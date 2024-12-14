import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Travel Logo</div>
        <nav className="space-x-4 md:space-x-6">
          <Link to="/hotels" className="text-gray-600 text-primary text-sm md:text-base">Hotels</Link>
          <Link to="/blogs" className="text-primary text-sm md:text-base">Blogs</Link>
          <Link to="/favorites" className="text-gray-600 text-primary text-sm md:text-base">Favorites</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
