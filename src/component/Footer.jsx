import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            <li><a href="#" className="hover:underline">Hotels</a></li>
            <li><a href="#" className="hover:underline">Blogs</a></li>
            <li><a href="#" className="hover:underline">Favorites</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at justo at massa gravida malesuada.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>Email: support@travelwebsite.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="p-2 w-full rounded-md mb-4 bg-gray-800 text-white"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
